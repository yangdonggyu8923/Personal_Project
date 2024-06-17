package com.lawmate.personalproject.lawyer.service;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface LawyerService {
    Messenger register(LawyerDto lawyerDto);
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
                .address(dto.getAddress())
                .lawyerNo(dto.getLawyerNo())
                .belong(dto.getBelong())
                .belongPhone(dto.getBelongPhone())
                .image(dto.getImage())
                .visitCost(dto.getVisitCost())
                .phoneCost(dto.getPhoneCost())
                .videoCost(dto.getVideoCost())
                .university(dto.getUniversity())
                .major(dto.getMajor())
                .auth(dto.isAuth())
                .startTime(dto.getStartTime())
                .endTime(dto.getEndTime())
                .account(dto.getAccount())
                .premium(dto.isPremium())
                .email(dto.getEmail())
                .addressDetail(dto.getAddressDetail())
                .birth(dto.getBirth())
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
                .address(lawyerModel.getAddress())
                .lawyerNo(lawyerModel.getLawyerNo())
                .belong(lawyerModel.getBelong())
                .belongPhone(lawyerModel.getBelongPhone())
                .image(lawyerModel.getImage())
                .visitCost(lawyerModel.getVisitCost())
                .phoneCost(lawyerModel.getPhoneCost())
                .videoCost(lawyerModel.getVideoCost())
                .university(lawyerModel.getUniversity())
                .major(lawyerModel.getMajor())
                .auth(lawyerModel.isAuth())
                .startTime(lawyerModel.getStartTime())
                .endTime(lawyerModel.getEndTime())
                .account(lawyerModel.getAccount())
                .birth(lawyerModel.getBirth())
                .email(lawyerModel.getEmail())
                .premium(lawyerModel.isPremium())
                .addressDetail(lawyerModel.getAddressDetail())
                .build();
    }


    Messenger login(LawyerDto lawyerDto);

    Boolean existsByUsername(String username);
}
