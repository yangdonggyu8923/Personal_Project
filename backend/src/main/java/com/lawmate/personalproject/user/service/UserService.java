package com.lawmate.personalproject.user.service;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.common.service.CommandService;
import com.lawmate.personalproject.common.service.QueryService;
import com.lawmate.personalproject.user.domain.UserModel;
import com.lawmate.personalproject.user.domain.UserDto;

import java.util.Optional;

public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {
    Optional<UserModel> findUserByUsername(String username);
    Optional<UserModel> findUserByName(String name);
    Messenger modify(UserDto dto);
    Messenger login(UserDto param);
    Boolean logout(String accessToken);
    Boolean existsByUsername(String username);
    Messenger update(UserDto dto);

//    List<UserDto> getUsersById();

    default UserModel dtoToEntity(UserDto dto) {
        return UserModel.builder()
                .userId(dto.getUserId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
//                .phone(dto.getPhone())
                .build();
    }
    default UserDto entityToDto(UserModel user){
        return UserDto.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
//                .phone(user.getPhone())
                .build();
    }

}
