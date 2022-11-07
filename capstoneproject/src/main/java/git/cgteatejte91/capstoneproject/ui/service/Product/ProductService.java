package git.cgteatejte91.capstoneproject.ui.service.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
