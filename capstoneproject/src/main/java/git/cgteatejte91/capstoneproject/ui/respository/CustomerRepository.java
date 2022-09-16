package git.cgteatejte91.capstoneproject.ui.respository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer,String>{



    Optional<Customer> findCustomerByEmail(String email);

    
    //for mongoTemplate
    // public class CustomerRepository {

    //     @Autowired
    //     MongoTemplate mongoTemplate;

	// public List<Customer> findAllCustomers() {
	// 	return mongoTemplate.findAll(Customer.class);
	// }

    // public Customer registerNewCustomer(Customer customer) {
    //     return mongoTemplate.save(customer);
    // }
    




}
