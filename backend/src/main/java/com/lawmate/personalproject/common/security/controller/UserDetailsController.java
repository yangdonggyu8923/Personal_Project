//package com.lawmate.personalproject.common.security.controller;
//
//import com.lawmate.personalproject.common.security.service.UserDetailsServiceImpl;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.java.Log;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.stereotype.Component;
//import org.springframework.web.bind.annotation.RestController;
//
//@Log
//@Component
//@RequiredArgsConstructor
//public class UserDetailsController implements AuthenticationProvider {
//    private final UserDetailsServiceImpl detailsService;
//
//    @Value("${jwt.secret:secret-key}")
//    private String securityKey;
//
//    @Value("${jwt.expiration: 3600000}")
//    private long validityInMs = 3600000; // 1h
//
//
//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        return null;
//    }
//
//    @Override
//    public boolean supports(Class<?> authentication) {
//        return false;
//    }
//}
