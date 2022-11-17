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
    private LocalDate paidAt;
    private LocalDate DeliveredAt;
    private String created = LocalDateTime.now().toString();

    public Order(String username, OrderItems[] orderItems, ShippingAddress shippingAddress, String paymentMethod,
            float itemsPrice, float shippingPrice, float taxPrice, float totalPrice, boolean isPaid,
            boolean isDelivered, LocalDate paidAt, LocalDate deliveredAt, String created) {
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
        DeliveredAt = deliveredAt;
        this.created = created;
    }
    

     public Order(OrderItems[] orderItems, ShippingAddress shippingAddress, String paymentMethod, float itemsPrice,
            float shippingPrice, float taxPrice, float totalPrice, String created) {
        this.orderItems = orderItems;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.itemsPrice = itemsPrice;
        this.shippingPrice = shippingPrice;
        this.taxPrice = taxPrice;
        this.totalPrice = totalPrice;
        this.created = created;
    }
    
}
