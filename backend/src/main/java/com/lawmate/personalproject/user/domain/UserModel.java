package com.lawmate.personalproject.user.domain;


import com.lawmate.personalproject.common.enums.Role;
import com.lawmate.personalproject.order.domain.OrderModel;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString(exclude = {"id"})

public class UserModel {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    @Column(name = "username", unique = true, nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    @Size(min=8, message = "8자리 이상 입력하시오")
    private String password;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "reg_date")
    private String regDate;
    @OneToMany(mappedBy = "user")
    private List<OrderModel> orders = new ArrayList<>();
    @ElementCollection(fetch = FetchType.EAGER)
    public List<Role> roles;



}
