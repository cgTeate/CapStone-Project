package git.cgteatejte91.capstoneproject.ui.orders;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.Order.Order;
import git.cgteatejte91.capstoneproject.ui.respository.Order.OrdersRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class OrdersService {

    @Autowired
    private final OrdersRepository ordersRepository;

    // //post request
    // public String addOrder(Order order) {
    //     // Optional<Order> orderOptional = orderRepository
    //         //     .findById(order);
    //         // if(productOptional.isPresent()) {   
    //         //     throw new IllegalStateException("two duplicate order IDs cannot exist");
    //         // }
    //         ordersRepository.save(order);
    // }


    public String addOrder(OrdersRequest request) {
            Order order = new Order(
                    request.getOrderItems(),
                    request.getShippingAddress(),
                    request.getPaymentMethod(),
                    request.getItemsPrice(),
                    request.getShippingPrice(),
                    request.getTaxPrice(),
                    request.getTotalPrice(),
                    request.getCreated()
            );
                    Optional<Order> orderOptional = ordersRepository
                .findById(order);
            if(orderOptional.isPresent()) {   
                throw new IllegalStateException("two duplicate order IDs cannot exist");
            }
            ordersRepository.save(order);
            return "order added successfully";
    
    }

}
