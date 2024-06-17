package com.lawmate.personalproject.article.domain;

import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Entity(name = "articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString(exclude = {"id"})
public class ArticleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    private LawyerModel lawyer;
    private String title;
    private String content;
    private LocalDateTime regDate;
    private LocalDateTime modDate;
}
