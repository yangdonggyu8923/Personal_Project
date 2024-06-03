package com.lawmate.personalproject.user.domain;

import com.lawmate.personalproject.common.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

@Component
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class UserDto {
    @ApiModelProperty(position = 0)
    private long userId;
    @ApiModelProperty(position = 1)
    private String username;
    @ApiModelProperty(position = 2)
    private String password;
    @ApiModelProperty(position = 3)
    private String name;
    @ApiModelProperty(position = 4)
    private String email;
    @ApiModelProperty(position = 5)
    private String regDate;
    @ApiModelProperty(position = 6)
    private String token;
    @ApiModelProperty(position = 7)
    private List<Role> roles;
}
