package com.lawmate.personalproject.lawyer.service;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface LawyerService {
    Messenger save(LawyerDto lawyerDto);
    Messenger crawl() throws IOException;
    Messenger deleteById(Long id);
    Messenger modify(LawyerDto lawyerDto);
    Messenger update(LawyerDto lawyerDto);
    Long count();
    Optional<LawyerDto> findById(Long id);
    List<LawyerDto> findAll();
    Boolean logout(String token);


//    List<LawyerDto> getLawyersById();
    default LawyerModel dtoToEntity(LawyerDto dto) {
        return LawyerModel.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .law(dto.getLaw())
                .lawyerNo(dto.getLawyerNo())
                .address(dto.getAddress())
                .office(dto.getOffice())
                .build();
    }
    default LawyerDto entityToDto(LawyerModel lawyerModel){
        return LawyerDto.builder()
                .id(lawyerModel.getId())
                .username(lawyerModel.getUsername())
                .password(lawyerModel.getPassword())
                .name(lawyerModel.getName())
                .phone(lawyerModel.getPhone())
                .law(lawyerModel.getLaw())
                .lawyerNo(lawyerModel.getLawyerNo())
                .address(lawyerModel.getAddress())
                .office(lawyerModel.getOffice())
                .build();
    }


    Messenger login(LawyerDto lawyerDto);

    Boolean existsByUsername(String username);
}
