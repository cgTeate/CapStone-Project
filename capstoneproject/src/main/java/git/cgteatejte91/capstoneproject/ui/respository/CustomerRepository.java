package git.cgteatejte91.capstoneproject.ui.respository;

import org.springframework.data.mongodb.repository.MongoRepository;

import git.cgteatejte91.capstoneproject.ui.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    
}
