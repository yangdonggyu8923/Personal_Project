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
                .email(dto.getEmail())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .birth(dto.getBirth())
                .lawyerNo(dto.getLawyerNo())
                .belong(dto.getBelong())
                .address(dto.getAddress())
                .addressDetail(dto.getAddressDetail())
                .belongPhone(dto.getBelongPhone())
                .image(dto.getImage())
                .law(dto.getLaw())
                .visitCost(dto.getVisitCost())
                .phoneCost(dto.getPhoneCost())
                .videoCost(dto.getVideoCost())
                .university(dto.getUniversity())
                .major(dto.getMajor())
                .startTime(dto.getStartTime())
                .endTime(dto.getEndTime())
                .account(dto.getAccount())
                .auth(dto.isAuth())
                .premium(dto.isPremium())
                .build();
    }
    default LawyerDto entityToDto(LawyerModel lawyerModel){
        return LawyerDto.builder()
                .id(lawyerModel.getId())
                .username(lawyerModel.getUsername())
                .email(lawyerModel.getEmail())
                .password(lawyerModel.getPassword())
                .name(lawyerModel.getName())
                .phone(lawyerModel.getPhone())
                .birth(lawyerModel.getBirth())
                .lawyerNo(lawyerModel.getLawyerNo())
                .belong(lawyerModel.getBelong())
                .address(lawyerModel.getAddress())
                .addressDetail(lawyerModel.getAddressDetail())
                .belongPhone(lawyerModel.getBelongPhone())
                .image(lawyerModel.getImage())
                .law(lawyerModel.getLaw())
                .visitCost(lawyerModel.getVisitCost())
                .phoneCost(lawyerModel.getPhoneCost())
                .videoCost(lawyerModel.getVideoCost())
                .university(lawyerModel.getUniversity())
                .major(lawyerModel.getMajor())
                .startTime(lawyerModel.getStartTime())
                .endTime(lawyerModel.getEndTime())
                .account(lawyerModel.getAccount())
                .auth(lawyerModel.isAuth())
                .premium(lawyerModel.isPremium())
                .build();
    }


    Messenger login(LawyerDto lawyerDto);

    Boolean existsByUsername(String username);
}
