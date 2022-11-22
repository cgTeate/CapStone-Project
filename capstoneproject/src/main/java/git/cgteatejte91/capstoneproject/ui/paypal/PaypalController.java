package git.cgteatejte91.capstoneproject.ui.paypal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/keys/paypal")
public class PaypalController {

    @Autowired
    PaypalConfig paypalConfig;
    PaypalService service;

    //return paypal client ID if user is authenticated
    @GetMapping
    public String fetchUser(){
        return paypalConfig.getClientId();
    }
}
