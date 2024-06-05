package com.lawmate.personalproject.common.security.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import java.io.Serializable;
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegisterDto implements Serializable {
    //it's a Data Transfer Object for registration
    String firstName ;
    String lastName ;
    String email;
    String username;
    String password ;
}
