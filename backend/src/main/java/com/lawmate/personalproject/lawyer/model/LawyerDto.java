package com.lawmate.personalproject.lawyer.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class LawyerDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String law;
    private String lawyerNo;
    private String token;

    private String imgUrl;
    private String birth;
    private String office;
    private String address;
}
