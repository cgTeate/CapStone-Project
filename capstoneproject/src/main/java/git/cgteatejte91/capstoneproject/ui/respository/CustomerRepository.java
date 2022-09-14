package git.cgteatejte91.capstoneproject.ui.respository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import git.cgteatejte91.capstoneproject.ui.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    Optional<Customer> findCustomerByEmail(String email);
}
