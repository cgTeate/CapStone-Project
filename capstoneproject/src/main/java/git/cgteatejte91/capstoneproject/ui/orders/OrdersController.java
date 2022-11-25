package git.cgteatejte91.capstoneproject.ui.orders;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.Order.Order;
import git.cgteatejte91.capstoneproject.ui.model.Order.PaymentResult;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/orders")
@AllArgsConstructor
public class OrdersController {
    @Autowired
    private final OrdersService ordersService;

        //add order
        @PostMapping("/placeOrder")
        public String addProduct(@RequestBody OrdersRequest request) {
           return ordersService.addOrder(request);
        }
        
    //get all orders of current user
    @GetMapping("/history/{username}")
    public List<Order> fetchAllProducts(@PathVariable("username") String username){
        return ordersService.getAllOrders(username);
    }
    //get order information with order id
    @GetMapping(path = "{id}")
    public Order fetchUser(@PathVariable("id") String id){
        return ordersService.getOrder(id);
    }

    @PutMapping("/{id}/pay")
    public Order updatePaidAt(@PathVariable("id") String id, @RequestBody PaymentResult paymentResult){
        return ordersService.updateOrderPayment(id, paymentResult);
    }

}
