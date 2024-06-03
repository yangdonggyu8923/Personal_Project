package com.lawmate.personalproject.item.repository;

import com.lawmate.personalproject.item.domain.ItemModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<ItemModel, Long> {
}
