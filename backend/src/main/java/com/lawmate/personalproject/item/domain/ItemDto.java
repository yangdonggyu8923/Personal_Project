package com.lawmate.personalproject.item.domain;

import com.lawmate.personalproject.order.domain.OrderModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Data
@Component
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
    @ApiModelProperty(position = 0)
    private long itemId;
    @ApiModelProperty(position = 1)
    private String itemBrand;
    @ApiModelProperty(position = 2)
    private String modelNo;
    @ApiModelProperty(position = 3)
    private String itemName;
    @ApiModelProperty(position = 4)
    private String itemColor;
    @ApiModelProperty(position = 5)
    private String releaseDate;
    @ApiModelProperty(position = 6)
    private Boolean soldOut;
    @ApiModelProperty(position = 7)
    private List<OrderModel> orders = new ArrayList<>();
}
