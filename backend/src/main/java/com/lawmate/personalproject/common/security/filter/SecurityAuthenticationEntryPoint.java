package com.lawmate.personalproject.common.security.filter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;
import java.io.PrintWriter;

@RequiredArgsConstructor
public class SecurityAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final HandlerExceptionResolver exceptionResolver;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {
        exceptionResolver.resolveException(request, response, response, authException);
    }
}
