package com.lawmate.personalproject.lawyer.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "lawyers")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString(exclude = {"id"})

public class LawyerModel {

    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 회원가입
    private String username;
    private String email;
    private String password;
    private String name;
    private String phone;
    private String birth;
    private String lawyerNo;

    // 회원가입 후 추가 정보
    private String belong;
    private String address;
    private String belongPhone;
    private String image;
    private String law;
    private String visitCost;
    private String phoneCost;
    private String videoCost;
    private String university;
    private String major;
    
    // 변호사 계정 인증
    private boolean auth;
    
    // 변호사 프리미엄 계정
    private boolean premium;

    private String token;


}
