package git.cgteatejte91.capstoneproject.ui.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.Customer;
import git.cgteatejte91.capstoneproject.ui.service.CustomerService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/customers")
@AllArgsConstructor
public class CustomerController {

    @Autowired
    private final CustomerService customerService;

    @GetMapping
    public List<Customer> fetchAllStudents(){
        return customerService.getAllCustomers();
    }

    @PostMapping
    public void registerNewCustomer(@RequestBody Customer customer) {
        customerService.registerNewCustomer(customer);
    }

    @DeleteMapping(path = "{customerId}")
    public void deleteCustomer(@PathVariable("customerId") String customerId) {
        customerService.deleteCustomer(customerId);
    }

    @PutMapping(path = "{customerId}")
    public void updateCustomer(
        @PathVariable("customerId") String customerId, 
        @RequestParam(required = false) String firstName,
        @RequestParam(required = false) String lastName,
        @RequestParam(required = false) String email){
            customerService.updateCustomer(customerId, firstName, lastName, email);
        }


    
}