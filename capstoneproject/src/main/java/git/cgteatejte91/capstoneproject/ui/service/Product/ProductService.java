package git.cgteatejte91.capstoneproject.ui.service.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.GenericPropertyMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.Product.Product;
import git.cgteatejte91.capstoneproject.ui.respository.Product.ProductRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ProductService {

    @Autowired
    private final ProductRepository productRepository;

    //get request
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    //get all by example
    public List<Product> getAllProductsByExample(Product product) {
        ExampleMatcher matcher = ExampleMatcher.matchingAny().withIgnoreCase().withMatcher("Kicks", GenericPropertyMatcher.of(StringMatcher.ENDING));
        Example<Product> p = Example.of(product, matcher);
        return productRepository.findAll(p);
    }
    //get all by category
    public List<Product> getAllProductsByCategory(String category) {
        // ExampleMatcher matcher = ExampleMatcher.matchingAny().withIgnoreCase().withMatcher("Kicks", GenericPropertyMatcher.of(StringMatcher.ENDING));
        // Example<Product> p = Example.of(product, matcher);
        return productRepository.findAllByCategory(category);
    }

    public List<Product> getAllRetailPriceGreaterThan(float retailPrice) {
        return productRepository.findByRetailPriceGreaterThan(retailPrice);
    }


    //post request
    public void addProduct(Product product) {
        // Optional<Product> productOptional = productRepository
        //     .findProductByStyleId(product.getStyleId());
        // if(productOptional.isPresent()) {   
        //     throw new IllegalStateException("product already exists");
        // }
        productRepository.save(product);
    }

    //delete request
    public void deleteProduct(String productId) {
        boolean exists = productRepository.existsById(productId);
        if(!exists) {
            throw new IllegalStateException("Product with id " + productId + " does not exist");
    }
    productRepository.deleteById(productId);
    }
    
    
}
