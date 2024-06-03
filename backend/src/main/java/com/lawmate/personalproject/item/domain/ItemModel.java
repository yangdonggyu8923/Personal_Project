package com.lawmate.personalproject.item.domain;

import com.lawmate.personalproject.order.domain.OrderModel;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "items")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Data
@ToString(exclude = {"id"})
public class ItemModel {
    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemId;
    @Column(name = "item_brand")
    private String itemBrand;
    @Column(name = "model_no")
    private String modelNo;
    @Column(name = "item_name")
    private String itemName;
    @Column(name = "item_color")
    private String itemColor;
    @Column(name = "release_date")
    private String releaseDate;
    @Column(name = "sold_out")
    private Boolean soldOut;
    @OneToMany(mappedBy = "item")
    private List<OrderModel> orders = new ArrayList<>();
    @Builder
    public ItemModel(String itemBrand, String itemName, String itemColor){
        this.itemBrand = itemBrand;
        this.itemName = itemName;
        this.itemColor = itemColor;
    }
}
