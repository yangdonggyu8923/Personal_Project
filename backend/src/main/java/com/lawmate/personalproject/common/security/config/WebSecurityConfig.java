package com.lawmate.personalproject.common.security.config;

import com.lawmate.personalproject.common.security.exception.AccessDecisionManagerAuthorizationManagerAdapter;
import com.lawmate.personalproject.common.security.exception.RoleHierarchyService;
import com.lawmate.personalproject.common.security.exception.UserLoginFailureHandler;
import com.lawmate.personalproject.common.security.exception.UserLoginSuccessHandler;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@Configuration
public class WebSecurityConfig {

//    private final UserLoginSuccessHandler loginSuccessHandler;
//    private final UserLoginFailureHandler loginFailureHandler;
//    private final AccessDecisionManagerAuthorizationManagerAdapter authorizationManager;
//    private final RoleHierarchyService roleHierarchyService;    //권한 처리
//
//    @Bean
//    PasswordEncoder encoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    AuthenticationManager manager() throws Exception {
//        return null;
//    }
//
//    @Bean
//    ModelMapper mapper() {
//        return new ModelMapper();
//    }
//
////    @Bean
////    public WebSecurityCustomizer configure() {
////        return web -> web.ignoring().requestMatchers(SECURITY_EXCLUDE_PATTERN_ARR);
////    }
//
//    @PostConstruct
//    public void init() {
//        // spring hierarchy 관련 셋팅
////        roleHierarchyService.resetRoleHierarchyData();
//    }
//
//
//    @Bean
//    public SecurityFilterChain userFilterChain(HttpSecurity http) throws Exception {
//        http.securityMatcher("/user/**")    // */
//                .authorizeHttpRequests(authorize -> authorize.dispatcherTypeMatchers(DispatcherType.FORWARD, DispatcherType.ERROR).permitAll().anyRequest().access(authorizationManager)
////              .anyRequest().authenticated()
//                ).csrf(AbstractHttpConfigurer::disable) // CSRF OFF
//                .formLogin(formLogin -> formLogin.loginPage("/user/login").permitAll().defaultSuccessUrl("/user/main").loginProcessingUrl("/user/login/loginUser").successHandler(loginSuccessHandler).failureHandler(loginFailureHandler).usernameParameter("empId").passwordParameter("passWd")).logout(logout -> logout.logoutUrl("/user/logout").logoutSuccessUrl("/user/login")).exceptionHandling(e -> e.accessDeniedPage("/error/notAuth"));
//
//        http.headers(header -> header.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin).httpStrictTransportSecurity(hstsConfig -> hstsConfig.includeSubDomains(true).maxAgeInSeconds(3600)));
//
//        http.sessionManagement(session -> session.sessionFixation().changeSessionId().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).maximumSessions(1).maxSessionsPreventsLogin(false).expiredSessionStrategy(sessionInformationExpiredStrategy).sessionRegistry(springSessionBackedSessionRegistry));
//
//        return http.build();
//    }
}
