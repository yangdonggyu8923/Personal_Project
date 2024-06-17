package com.lawmate.personalproject.article.repository;

import com.lawmate.personalproject.article.domain.ArticleModel;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleModel, Long>, ArticleDao {
}
