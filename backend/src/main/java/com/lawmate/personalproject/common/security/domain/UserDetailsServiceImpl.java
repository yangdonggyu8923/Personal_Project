package com.lawmate.personalproject.common.security.domain;

import com.lawmate.personalproject.user.domain.UserModel;
import com.lawmate.personalproject.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserModel> user = Optional.ofNullable(repository.findByUsername(username))
                .orElseThrow(() -> new UsernameNotFoundException(username + "에 해당하는 객체가 존재하지 않습니다."));
        return UserDetailsImpl.build(user.get());
    }
}
