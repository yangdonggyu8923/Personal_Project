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
    private String password;
    private String name;
    private String phone;
    private String law;
    private String lawyerNo;
    private String token;
    private String office;
    private String address;

    @QueryProjection
    public LawyerDto(Long id, String username, String password, String name, String phone, String law, String lawyerNo, String token, String office, String address) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.law = law;
        this.lawyerNo = lawyerNo;
        this.token = token;
        this.office = office;
        this.address = address;
    }
}
