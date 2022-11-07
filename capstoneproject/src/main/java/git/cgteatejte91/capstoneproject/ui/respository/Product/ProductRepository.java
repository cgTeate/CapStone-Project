package git.cgteatejte91.capstoneproject.ui.respository.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.Product.Product;


@Repository
public interface ProductRepository extends MongoRepository<Product, String>{
    
    Optional<Product> findProductByStyleId(String styleId);
    // Optional<Product> findProductByKicks();
    // List<Product> findAll(productName="Kicks");
}

