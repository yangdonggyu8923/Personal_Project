package com.lawmate.personalproject.common.security.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lawmate.personalproject.user.domain.UserModel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@RequiredArgsConstructor
public class UserDetailsImpl implements UserDetails{

    private final long userId;
    private final String username;
    private final String email;
    private final String name;
    @JsonIgnore
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public static UserDetailsImpl build(UserModel user){
        List<GrantedAuthority> grantedAuthorities = user.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getAuthority()))
                .collect(Collectors.toList());
        return new UserDetailsImpl(
                user.getUserId(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                user.getRegDate(),
                grantedAuthorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }
}
