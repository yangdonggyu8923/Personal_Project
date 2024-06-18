package com.lawmate.personalproject.reply.domain;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
@Data
@Component
@ToString
@Builder
@NoArgsConstructor
public class ReplyDto {
    private Long id;
    private String content;
    private LocalDateTime regDate;
    private LocalDateTime modDate;

    @QueryProjection
    public ReplyDto(Long id, String content, LocalDateTime regDate, LocalDateTime modDate) {
        this.id = id;
        this.content = content;
        this.regDate = regDate;
        this.modDate = modDate;
    }
}
