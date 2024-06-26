package com.lawmate.personalproject.lawyer.controller;

import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import com.lawmate.personalproject.lawyer.service.LawyerServiceImpl;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@RequestMapping(path = "/api/auth")
@Slf4j
public class AuthController {

    private final LawyerServiceImpl service;

    @PostMapping("/login")
    public ResponseEntity<Messenger> login(@RequestBody LawyerDto param) {
        log.info("로그인 컨트롤러에 들어온 파라미터 : " + param);
        return ResponseEntity.ok(service.login(param));
    }



    @GetMapping("/exists-username")
    public ResponseEntity<Boolean> existsByUsername(@RequestParam("username") String username) {
        log.info("existsByUsername 파라미터 : " + username);
        return ResponseEntity.ok(service.existsByUsername(username));
    }

}