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
    default LawyerDto entityToDto(LawyerModel lawyer){
        return LawyerDto.builder()
                .id(lawyer.getId())
                .username(lawyer.getUsername())
                .password(lawyer.getPassword())
                .name(lawyer.getName())
                .phone(lawyer.getPhone())
                .law(lawyer.getLaw())
                .lawyerNo(lawyer.getLawyerNo())
                .address(lawyer.getAddress())
                .office(lawyer.getOffice())
                .build();
    }


    Messenger login(LawyerDto lawyerDto);

    Boolean existsByUsername(String username);
}
