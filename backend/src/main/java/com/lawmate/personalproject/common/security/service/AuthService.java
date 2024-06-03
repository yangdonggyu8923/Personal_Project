package com.lawmate.personalproject.common.security.service;
import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import com.lawmate.personalproject.user.domain.UserDto;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    Messenger login(UserDto param);
    String createToken(UserDto user);
    Messenger lawyerLogin(LawyerDto dto);

    String createLawyerToken(LawyerDto lawyerDto);
}