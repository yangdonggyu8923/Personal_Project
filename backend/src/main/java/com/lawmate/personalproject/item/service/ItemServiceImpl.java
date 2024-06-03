package com.lawmate.personalproject.item.service;

import com.lawmate.personalproject.item.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{
    private final ItemRepository repository;
}
