package git.cgteatejte91.capstoneproject.ui.respository.Order;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.Order.Order;

@Repository
public interface OrdersRepository extends MongoRepository<Order, String>{

    Optional<Order> findById(Order order);

}
