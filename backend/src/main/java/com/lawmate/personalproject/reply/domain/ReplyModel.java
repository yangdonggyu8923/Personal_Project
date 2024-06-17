package com.lawmate.personalproject.reply.domain;


import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity(name = "replies")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString(exclude = {"id"})
public class ReplyModel {
    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    private Board boardId;
//    private Lawyer lawyer;
    private String content;
    private LocalDateTime regDate;
    private LocalDateTime modDate;

}
