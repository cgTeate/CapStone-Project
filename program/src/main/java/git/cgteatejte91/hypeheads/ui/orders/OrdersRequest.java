package git.cgteatejte91.hypeheads.ui.orders;

import java.time.LocalDateTime;

import git.cgteatejte91.hypeheads.ui.model.Order.OrderItems;
import git.cgteatejte91.hypeheads.ui.model.Order.ShippingAddress;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class OrdersRequest {
    private final String username;
    private final OrderItems orderItems[];
    private final ShippingAddress shippingAddress;
    private final String paymentMethod;
    private final float itemsPrice;
    private final float shippingPrice;
    private final float taxPrice;
    private final float totalPrice;
    private final String paidAt;
    // private final String createdAt = LocalDateTime.now().toString();
}