package com.lawmate.personalproject.lawyer.domain;

import com.querydsl.core.annotations.QueryProjection;
import jakarta.persistence.Column;
import lombok.*;
import org.springframework.stereotype.Component;

@Data
@Component
@ToString
@Builder
@NoArgsConstructor
public class LawyerDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String name;
    private String phone;
    private String birth;
    private String lawyerNo;
    private String belong;
    private String address;
    private String addressDetail;
    private String belongPhone;
    private String image;
    private String law;
    private String visitCost;
    private String phoneCost;
    private String videoCost;
    private String university;
    private String major;
    private boolean auth;
    private boolean premium;
    private String token;

    @QueryProjection
    public LawyerDto(Long id, String username, String email, String password, String name, String phone, String birth, String lawyerNo, String belong, String address, String addressDetail, String belongPhone, String image, String law, String visitCost, String phoneCost, String videoCost, String university, String major, boolean auth, boolean premium, String token) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.birth = birth;
        this.lawyerNo = lawyerNo;
        this.belong = belong;
        this.address = address;
        this.addressDetail = addressDetail;
        this.belongPhone = belongPhone;
        this.image = image;
        this.law = law;
        this.visitCost = visitCost;
        this.phoneCost = phoneCost;
        this.videoCost = videoCost;
        this.university = university;
        this.major = major;
        this.auth = auth;
        this.premium = premium;
        this.token = token;
    }
}

