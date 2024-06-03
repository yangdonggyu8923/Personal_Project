package com.lawmate.personalproject.common.config;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

//    @Bean // HTTP 보안 구성
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//
//
//                .authorizeRequests(authorizeRequests ->
//                        authorizeRequests
//                                .requestMatchers("/api/users").hasRole("USER")
//                                .requestMatchers("/api/lawyers").hasRole("LAWYER")
//                                .requestMatchers("/api/admins").hasRole("ADMIN")
//                                .anyRequest().authenticated()
//                )
//                .formLogin(formLogin -> formLogin
//                        .usernameParameter("username")
//                        .passwordParameter("password")
//                        .defaultSuccessUrl("/", true))
//                .httpBasic(withDefaults());
//
//        return http.build();
//    }
//
//    @Bean // 웹 보안 설정을 사용자 정의
//    public WebSecurityCustomizer webSecurityCustomizer() {
//        return (web) -> web.ignoring().requestMatchers("/public/**");
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//        manager.createUser(User.withUsername("user1")
//                .password(passwordEncoder().encode("1234"))
//                .roles("USER")
//                .build());
//        manager.createUser(User.withUsername("lawyer1")
//                .password(passwordEncoder().encode("1234"))
//                .roles("LAWYER")
//                .build());
//        return manager;
//    }
//
//
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
}
