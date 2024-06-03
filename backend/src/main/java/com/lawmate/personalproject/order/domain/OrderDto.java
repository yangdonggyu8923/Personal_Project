package com.lawmate.personalproject.order.domain;

import com.lawmate.personalproject.item.domain.ItemModel;
import com.lawmate.personalproject.user.domain.UserModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import org.springframework.stereotype.Component;

@Data
@Component
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
    @ApiModelProperty(position = 0)
    private long orderId;
    @ApiModelProperty(position = 1)
    private long price;
    @ApiModelProperty(position = 2)
    private String count;
    @ApiModelProperty(position = 3)
    private UserModel user;
    @ApiModelProperty(position = 4)
    private ItemModel item;
}
