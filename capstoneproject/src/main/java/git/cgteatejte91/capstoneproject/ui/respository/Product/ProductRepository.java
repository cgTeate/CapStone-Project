package git.cgteatejte91.capstoneproject.ui.respository.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.Product.Product;


@Repository
public interface ProductRepository extends MongoRepository<Product, String>{
    
    Optional<Product> findProductByStyleId(String styleId);
    
    List<Product> findByCategory(String category);

    // @Query(value="{'category': ?0}", fields = "{'category':1}")
    // List<Product> getAllProductsByCategory(String category);

    @Query(value="{'retailPrice': {$gt: ?0}}", fields = "{'retailPrice': 1, 'productName': 1}")
    List<Product> findByRetailPriceGreaterThan(float retailPrice);

    //List<Product> findByAddressCountry(String country);
    
}

