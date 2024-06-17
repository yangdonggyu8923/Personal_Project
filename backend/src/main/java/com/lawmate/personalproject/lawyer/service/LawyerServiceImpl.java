package com.lawmate.personalproject.lawyer.service;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.common.security.jwt.JwtProvider;
import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import com.lawmate.personalproject.lawyer.repository.LawyerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.*;

@RequiredArgsConstructor
@Service
@Slf4j
public class LawyerServiceImpl implements LawyerService {
    private final LawyerRepository repository;
    private final JwtProvider jwtProvider;

    @Override
    public List<LawyerDto> findAll() {
        return repository.findAll().stream().map(this::entityToDto).toList();
//        return repository.findAllByOrderByIdDesc().stream().map(this::entityToDto).toList();
    }

    @Override
    public Messenger crawl() throws IOException {
//        List<LawyerModel> ls = new ArrayList<>();
//        System.out.println("크롤링 실행");
//        for (int page = 1; page <= 2; page++) {
//            Document doc = Jsoup.connect("https://www.koreanbar.or.kr/pages/search/search1.asp?sido1=&gun1=&dong1=&special1_1=&special1=1&searchtype=mname&searchstr=&page=" + page).timeout(10 * 1000).get();
//            Elements rows = doc.select("div.board_listW tr");
//            for (Element row : rows) {
//                Element nameElement = row.select("td:nth-child(3) a").first();
//                String name = "";
//                if (nameElement != null) {
//                    name = nameElement.ownText().trim();
//                }
//
//                String subject = row.select("td:nth-child(4) li").text();
//                String office = row.select("td:nth-child(6)").text();
//                String address = row.select("td:nth-child(7)").text();
//                subject = subject.replaceAll("\\(.*?\\)", "");
//
//                if (!name.isEmpty()) {
//                LawyerModel lawyerModel = LawyerModel.builder()
//                        .username("임시아이디")
//                        .password("임시비밀번호")
//                        .name(name)
//                        .phone("임시전화번호")
//                        .law(subject)
//                        .lawyerNo("임시자격번호")
//                        .address(address)
//                        .office(office)
//                        .build();
//                ls.add(lawyerModel);
//                }
//            }
//        }

        return Messenger.builder()
//                .message(repository.saveAll(ls).isEmpty() ? "FAILURE" : "SUCCESS")
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder()
                .message(repository.findById(id).isPresent() ? "SUCCESS" : "FAILURE")
                .build();
    }

    @Transactional
    @Override
    public Messenger modify(LawyerDto lawyerDto) {
//        repository.save(dtoToEntity(lawyerDto));
        return Messenger.builder()
                .message("SUCCESS")
                .build();
    }

    @Override
    public Long count() {
        return repository.count();
    }



    @Override
    public Messenger register(LawyerDto lawyerDto) {
        Optional<LawyerModel> existingLawyer = repository.findByUsername(lawyerDto.getUsername());
        if (existingLawyer.isPresent()) {
            return Messenger.builder()
                    .message("존재하는 아이디입니다.")
                    .build();
        }
        repository.save(dtoToEntity(lawyerDto));
        return Messenger.builder().message("SUCCESS").build();
    }

    @Override
    public Optional<LawyerDto> findById(Long id) {
        return repository.findById(id).stream().map(i -> entityToDto(i)).findAny();
    }

    @Transactional
    @Override
    public Messenger update(LawyerDto lawyerDto) {
        return repository.modifyLawyerById(lawyerDto)==1 ?
                Messenger.builder().message("SUCCESS").build() :
                Messenger.builder().message("FAILURE").build();
    }

    @Transactional
    @Override
    public Messenger login(LawyerDto lawyerDto) {
        log.info("로그인 서비스로 들어온 파라미터 : " + lawyerDto);

        Optional<LawyerModel> optLawyerModel = repository.findByUsername(lawyerDto.getUsername());

        if (!optLawyerModel.isPresent()) {
            return Messenger.builder()
                    .message("존재하지 않는 아이디입니다.")
                    .build();
        }

        LawyerModel lawyerModel = optLawyerModel.get();
        boolean isPasswordCorrect = lawyerModel.getPassword().equals(lawyerDto.getPassword());

        if (!isPasswordCorrect) {
            return Messenger.builder()
                    .message("비밀번호가 틀렸습니다.")
                    .build();
        }

        String accessToken = jwtProvider.createToken(entityToDto(lawyerModel));
        boolean flag = lawyerModel.getPassword().equals(lawyerDto.getPassword());
        repository.modifyTokenById(lawyerModel.getId(), accessToken);

        jwtProvider.printPayload(accessToken);

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAILURE")
                .accessToken(flag ? accessToken : "NONE")
                .build();
    }

    @Override
    public Boolean existsByUsername(String username) {
        return repository.existsByUsername(username);
    }

    @Transactional
    @Override
    public Boolean logout(String token) {
        String accessToken = token != null && token.startsWith("Bearer ") ?
                token.substring(7) : "undefined";
        Long id = jwtProvider.getPayload(accessToken).get("lawyerId", Long.class);
        String deleteToken = "";
        repository.modifyTokenById(id, deleteToken);
        return repository.findById(id).get().getToken().equals("");
    }

//    @Override
//    public List<LawyerDto> getLawyersById() {
//        return repository.getLawyersById()
//                .stream().map(i->entityToDto(i))
//                .toList();
//    }
}
