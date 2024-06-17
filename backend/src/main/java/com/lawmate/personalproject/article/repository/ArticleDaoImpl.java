package com.lawmate.personalproject.article.repository;

import com.lawmate.personalproject.article.domain.ArticleDto;
import com.lawmate.personalproject.article.domain.QArticleModel;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class ArticleDaoImpl implements ArticleDao{
    private final QArticleModel article = QArticleModel.articleModel;
    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Long modifyArticleById(ArticleDto dto) {
        return jpaQueryFactory.update(article)
                .set(article.content, dto.getContent())
                .set(article.regDate, dto.getRegDate())
                .set(article.modDate, dto.getModDate())
                .where(article.id.eq(dto.getId()))
                .execute();
    }
}
