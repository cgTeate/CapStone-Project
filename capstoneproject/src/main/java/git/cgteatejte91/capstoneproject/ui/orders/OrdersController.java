package git.cgteatejte91.capstoneproject.ui.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.Order.Order;
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
        
    //get order information with order id
    @GetMapping(path = "{id}")
    public Order fetchUser(@PathVariable("id") String id){
        return ordersService.getOrder(id);
    }


}
