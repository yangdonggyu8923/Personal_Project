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
    private String username;
    private String password;
    private String name;
    private String phone;
    private String law;
    private String lawyerNo;
    private String token;
    private String office;
    private String address;


}
