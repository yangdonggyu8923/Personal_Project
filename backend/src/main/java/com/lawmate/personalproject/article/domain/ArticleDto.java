package com.lawmate.personalproject.article.domain;

import com.querydsl.core.annotations.QueryProjection;
import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Data
@Component
@ToString
@Builder
@NoArgsConstructor
public class ArticleDto {
    private Long id;
    //    private LawyerModel lawyer;
    private String title;
    private String content;
    private LocalDateTime regDate;
    private LocalDateTime modDate;

    @QueryProjection
    public ArticleDto(Long id, String title, String content, LocalDateTime regDate, LocalDateTime modDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.regDate = regDate;
        this.modDate = modDate;
    }
}
