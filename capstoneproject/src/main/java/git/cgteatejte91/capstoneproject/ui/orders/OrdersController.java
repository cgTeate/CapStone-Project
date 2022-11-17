package git.cgteatejte91.capstoneproject.ui.orders;

import org.springframework.beans.factory.annotation.Autowired;
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

        //add new product
        @PostMapping()
        public String addProduct(@RequestBody OrdersRequest request) {
           return ordersService.addOrder(request);
        }

}
