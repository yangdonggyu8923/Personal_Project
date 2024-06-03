package com.lawmate.personalproject.order.domain;


import com.lawmate.personalproject.item.domain.ItemModel;
import com.lawmate.personalproject.user.domain.UserModel;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "orders")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(exclude = {"id"})
public class OrderModel {
    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;
    @Column(name = "price")
    private long price;
    @Column(name = "order_status")
    private String count;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserModel user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private ItemModel item;

}
