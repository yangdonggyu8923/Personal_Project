package com.lawmate.personalproject.lawyer.service;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.model.Lawyer;
import com.lawmate.personalproject.lawyer.model.LawyerDto;
import com.lawmate.personalproject.user.model.UserDto;

import java.io.IOException;
import java.util.List;

public interface LawyerService {

    Messenger save(LawyerDto lawyerDto);
    Messenger crawl() throws IOException;
    Messenger deleteById(Long id);
    Messenger modify(LawyerDto lawyerDto);
    Long count();
    Boolean existsById(Long id);
    Boolean existsByName(String name);
    List<LawyerDto> findAll();
    default Lawyer dtoToEntity(LawyerDto dto) {
        return Lawyer.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .law(dto.getLaw())
                .lawyerNo(dto.getLawyerNo())
                .build();
    }
    default LawyerDto entityToDto(Lawyer lawyer){
        return LawyerDto.builder()
                .id(lawyer.getId())
                .username(lawyer.getUsername())
                .password(lawyer.getPassword())
                .name(lawyer.getName())
                .law(lawyer.getLaw())
                .lawyerNo(lawyer.getLawyerNo())
                .build();
    }
}
