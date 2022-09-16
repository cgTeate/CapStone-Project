package git.cgteatejte91.capstoneproject.ui.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.Customer;
import git.cgteatejte91.capstoneproject.ui.respository.CustomerRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CustomerService {

    @Autowired
    private final CustomerRepository customerRepository;

    public List<Customer> getAllCustomers(){
        return customerRepository.findAllCustomers();
    }

    public Customer registerNewCustomer(Customer customer) {
        return customerRepository.registerNewCustomer(customer);
    }
}

