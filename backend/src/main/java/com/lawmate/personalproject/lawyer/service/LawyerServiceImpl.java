package com.lawmate.personalproject.lawyer.service;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.model.Lawyer;
import com.lawmate.personalproject.lawyer.model.LawyerDto;
import com.lawmate.personalproject.lawyer.repository.LawyerRepository;
import com.lawmate.personalproject.user.model.UserDto;
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
    @Override
    public List<LawyerDto> findAll() {
        return repository.findAll().stream().map(i->entityToDto(i)).toList();
    }
    @Override
    public Messenger crawl() throws IOException {
        List<Lawyer> ls = new ArrayList<>();
        System.out.println("크롤링 실행");

        for (int page = 1; page <= 10; page++) {
            Document doc = Jsoup.connect("https://www.koreanbar.or.kr/pages/search/search1.asp?sido1=&gun1=&dong1=&special1_1=&special1=1&searchtype=mname&searchstr=&page=" + page).timeout(10 * 1000).get();
            Elements rows = doc.select("div.board_listW tr");
            for (Element row : rows) {
                Element nameElement = row.selectFirst("a");
                Element subjectElement = row.selectFirst("td.subject");
                if (nameElement != null && subjectElement != null) {
                    String name = nameElement.text();
                    String subject = subjectElement.text().replaceAll("\\(.*?\\)", "");

                    Lawyer lawyer = Lawyer.builder()
                        .username("임시아이디")
                        .password("임시비밀번호")
                        .name(name)
                        .law(subject)
                        .lawyerNo("임시자격번호")
                        .build();
                    ls.add(lawyer);

                    System.out.println("이름: " + name);
                    System.out.println("전문 분야: " + subject);
                    System.out.println("----------");
                }
            }
        }
        return Messenger.builder()
                .message(repository.saveAll(ls).isEmpty()?"FAILURE":"SUCCESS")
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder()
                .message(repository.findById(id).isPresent()?"SUCCESS":"FAILURE")
                .build();
    }
    @Transactional
    @Override
    public Messenger modify(LawyerDto lawyerDto) {
        repository.save(dtoToEntity(lawyerDto));
        return Messenger.builder()
                .message("SUCCESS")
                .build();
    }

    @Override
    public Long count() {
        return repository.count();
    }

    @Override
    public Boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public Boolean existsByName(String name) {
        return repository.existsByName(name);
    }

    @Override
    public Messenger save(LawyerDto lawyerDto) {
        repository.save(dtoToEntity(lawyerDto));
        return Messenger.builder().message("SUCCESS").build();
    }

    public Optional<LawyerDto> findById(Long id) {
        return repository.findById(id).stream().map(i->entityToDto(i)).findAny();
    }
}
