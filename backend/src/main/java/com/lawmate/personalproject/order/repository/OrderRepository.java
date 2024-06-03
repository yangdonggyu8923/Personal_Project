package com.lawmate.personalproject.order.repository;

import com.lawmate.personalproject.order.domain.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {
}
