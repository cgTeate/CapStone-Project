package git.cgteatejte91.capstoneproject.ui.model.Order;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Data
@Document()
public class Order {
    @Id
    private String id;
    private String username;
    private OrderItems orderItems[];
    private ShippingAddress shippingAddress;
    private String paymentMethod;
    private float itemsPrice;
    private float shippingPrice;
    private float taxPrice;
    private float totalPrice;
    private boolean isPaid;
    private boolean isDelivered;
    private String paidAt = LocalDateTime.now().toString();
    private LocalDate deliveredAt;
    

    public Order(String username, OrderItems[] orderItems, ShippingAddress shippingAddress, String paymentMethod,
            float itemsPrice, float shippingPrice, float taxPrice, float totalPrice, boolean isPaid,
            boolean isDelivered, String paidAt, LocalDate deliveredAt) {
        this.username = username;
        this.orderItems = orderItems;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.itemsPrice = itemsPrice;
        this.shippingPrice = shippingPrice;
        this.taxPrice = taxPrice;
        this.totalPrice = totalPrice;
        this.isPaid = isPaid;
        this.isDelivered = isDelivered;
        this.paidAt = paidAt;
        this.deliveredAt = deliveredAt;
    }
    

     public Order(OrderItems[] orderItems, ShippingAddress shippingAddress, String paymentMethod, float itemsPrice,
            float shippingPrice, float taxPrice, float totalPrice, String paidAt) {
        this.orderItems = orderItems;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.itemsPrice = itemsPrice;
        this.shippingPrice = shippingPrice;
        this.taxPrice = taxPrice;
        this.totalPrice = totalPrice;
        this.paidAt = paidAt;
    }
    
}
