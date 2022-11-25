package git.cgteatejte91.capstoneproject.ui.orders;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.Order.Order;
import git.cgteatejte91.capstoneproject.ui.model.Order.PaymentResult;
import git.cgteatejte91.capstoneproject.ui.respository.Order.OrdersRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class OrdersService {

    @Autowired
    private final OrdersRepository ordersRepository;
    private final static String ORDER_NOT_FOUND_MSG =
    "Order with id %s not found";

    public String addOrder(OrdersRequest request) {
            Order order = new Order(
                    request.getUsername(),
                    request.getOrderItems(),
                    request.getShippingAddress(),
                    request.getPaymentMethod(),
                    null,
                    request.getItemsPrice(),
                    request.getShippingPrice(),
                    request.getTaxPrice(),
                    request.getTotalPrice(),
                    false, 
                    false, 
                    request.getPaidAt(), 
                    null, 
                    LocalDateTime.now().toString()
            );
            ordersRepository.save(order);
           String id = order.getId();
            return id;
    
    }
    //get order details
    public Order getOrder(String id) {
       Order order = ordersRepository.findById(id).orElseThrow(() -> new IllegalStateException(
        ORDER_NOT_FOUND_MSG));
        return order;
    }
    //update order payment information 
    public Order updateOrderPayment(String id, PaymentResult request) {
        Order order = ordersRepository.findById(id).orElseThrow(() -> new IllegalStateException(
            ORDER_NOT_FOUND_MSG));

        // PaymentResult pr = request.getPaymentResult();
        // Order opr = new Order(request.getPaymentResult());

        if(order.isPaid()==true) 
        {
            // return order;
            throw new IllegalStateException("Error: order has already been paid");
        }
        else{
        order.setPaid(true);
        order.setPaidAt(LocalDateTime.now().toString());
        order.setPaymentResult(request);
        Order paidorder = ordersRepository.save(order);
        return paidorder;
        }
        
    }
    public List<Order> getAllOrders(String username) {
        // List<Order> orders = ordersRepository.findOrderByUsername(username);
        // return orders;
        return ordersRepository.findAllByUsername(username);
    }

    }
