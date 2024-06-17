package com.lawmate.personalproject.article.controller;

import com.lawmate.personalproject.article.domain.ArticleDto;
import com.lawmate.personalproject.article.service.ArticleServiceImpl;
import com.lawmate.personalproject.common.component.Messenger;
import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@RequestMapping("api/articles")
@Slf4j
public class ArticleController {
    private final ArticleServiceImpl service;

    @PostMapping("/save")
    public ResponseEntity<Messenger> save(@RequestBody ArticleDto param){
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.save(param));
    }
    @GetMapping("/list")
    public ResponseEntity<List<ArticleDto>> findByBoardId(){
        log.info(service.findAll().toString());
        return ResponseEntity.ok(service.findAll());
    }
    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam("id") Long id){
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.deleteById(id));
    }
    @GetMapping("/detail")
    public ResponseEntity<ArticleDto> findById(@RequestParam("id") Long id){
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.findById(id).orElseGet(ArticleDto::new));
    }
    @PostMapping("/update")
    public ResponseEntity<Messenger> update(@RequestBody ArticleDto param){
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.update(param));
    }
    @GetMapping("/count")
    public ResponseEntity<Long> count(){
        return ResponseEntity.ok(service.count());
    }
    //    @GetMapping("/exists")
//    public ResponseEntity<Messenger> existsById(PageRequestVo vo){
//        service.existsById(0L);
//        return ResponseEntity.ok(new Messenger());
//    }
    @PutMapping("/modify")
    public ResponseEntity<Messenger> modify(@RequestBody ArticleDto param) {
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.modify(param));
    }
//    @GetMapping("/myList")
//    public ResponseEntity<List<ArticleDto>> getArticleByLawyerId(@RequestParam("id") Long boardId) {
//        return ResponseEntity.ok(service.getArticleByLawyerId(boardId));
//    }
}
