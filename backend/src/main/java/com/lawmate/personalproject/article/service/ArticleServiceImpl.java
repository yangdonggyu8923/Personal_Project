package com.lawmate.personalproject.article.service;

import com.lawmate.personalproject.article.domain.ArticleDto;
import com.lawmate.personalproject.article.domain.ArticleModel;
import com.lawmate.personalproject.article.repository.ArticleRepository;
import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository repository;

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder()
                .message(repository.findById(id).isPresent() ? "SUCCESS" : "FAILURE")
                .build();
    }
    @Transactional
    @Override
    public Messenger modify(ArticleDto articleDto) {
        repository.save(dtoToEntity(articleDto));
        return Messenger.builder()
                .message("SUCCESS")
                .build();
    }


    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(i)).toList();
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return repository.findById(id).stream().map(i -> entityToDto(i)).findAny();
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
    public Messenger update(ArticleDto param) {
        return repository.modifyArticleById(param)==1 ?
                Messenger.builder().message("SUCCESS").build() :
                Messenger.builder().message("FAILURE").build();
    }


//    @Override
//    public List<ArticleDto> getArticleByLawyerId(Long id) {
//        return repository.getArticleByLawyerId(id)
//                .stream().map(i -> entityToDto(i))
//                .toList();
//    }

    @Transactional
    @Override
    public Messenger save(ArticleDto dto) {
        ArticleModel article = repository.save(dtoToEntity(dto));
        return Messenger.builder()
                .id(dto.getId())
                .message(article instanceof ArticleModel ? "SUCCESS" : "FAILURE")
                .build();
    }
}
