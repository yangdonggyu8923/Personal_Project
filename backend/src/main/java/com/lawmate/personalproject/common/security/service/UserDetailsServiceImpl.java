package com.lawmate.personalproject.common.security.service;

import com.lawmate.personalproject.user.domain.UserModel;
import com.lawmate.personalproject.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = repository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found!"));
        return user;
    }
}
