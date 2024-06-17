package com.lawmate.personalproject.article.repository;

import com.lawmate.personalproject.article.domain.ArticleDto;

public interface ArticleDao {
    Long modifyArticleById(ArticleDto dto);
}
