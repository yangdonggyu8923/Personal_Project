package com.lawmate.personalproject.lawyer.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
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
    private String username;
    @Size(min=8, message = "8자리 이상이어야 합니다.")
    private String password;
    private String name;
    private String phone;
    private String law;
    private String lawyerNo;
    private String token;
    private String office;
    private String address;


}
