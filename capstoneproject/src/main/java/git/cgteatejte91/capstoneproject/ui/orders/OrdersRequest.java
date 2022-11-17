package git.cgteatejte91.capstoneproject.ui.orders;

import java.time.LocalDateTime;

import git.cgteatejte91.capstoneproject.ui.model.Order.OrderItems;
import git.cgteatejte91.capstoneproject.ui.model.Order.ShippingAddress;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class OrdersRequest {
    private final OrderItems orderItems[];
    private final ShippingAddress shippingAddress;
    private final String paymentMethod;
    private final float itemsPrice;
    private final float shippingPrice;
    private final float taxPrice;
    private final float totalPrice;
    private final String created = LocalDateTime.now().toString();
}