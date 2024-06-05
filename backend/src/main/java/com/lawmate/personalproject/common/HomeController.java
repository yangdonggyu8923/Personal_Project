package com.lawmate.personalproject.common;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class HomeController {

    @GetMapping("/")
    public String hello(){
        return "Hello";
    }

}
