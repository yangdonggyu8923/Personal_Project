package com.lawmate.personalproject.order.service;

import com.lawmate.personalproject.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class OrderServiceImpl implements OrderService{

    private final OrderRepository repository;
}
