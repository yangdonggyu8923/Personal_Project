package com.lawmate.personalproject.article.service;

import com.lawmate.personalproject.article.domain.ArticleDto;
import com.lawmate.personalproject.article.domain.ArticleModel;
import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;

import java.util.List;
import java.util.Optional;

public interface ArticleService {
//    List<ArticleDto> getArticleByLawyerId(Long id);

    Messenger deleteById(Long id);
    Messenger modify(ArticleDto articleDto);
    Messenger save(ArticleDto dto);
    List<ArticleDto> findAll();
    Optional<ArticleDto> findById(Long id);
    Long count();
    Boolean existsById(Long id);
    default ArticleModel dtoToEntity(ArticleDto dto){

        return ArticleModel.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .modDate(dto.getModDate())
                .regDate(dto.getRegDate())
                .build();
    }

    default ArticleDto entityToDto(ArticleModel article){
        return ArticleDto.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent())
                .regDate(article.getRegDate())
                .modDate(article.getModDate())
                .build();
    }

    Messenger update(ArticleDto param);
}
