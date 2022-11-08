package git.cgteatejte91.capstoneproject.ui.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.Product.Product;
import git.cgteatejte91.capstoneproject.ui.service.Product.ProductService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/products")
@AllArgsConstructor
public class ProductController {

    @Autowired
    private final ProductService productService;

    //get all products
    @GetMapping
    public List<Product> fetchAllProducts(){
        return productService.getAllProducts();
    }
    //get all by example (column)
    @GetMapping("/example")
    public List<Product> fetchAllProductsByExample(@RequestBody Product product){
        return productService.getAllProductsByExample(product);
    }
    //get all by category (column)
    @GetMapping("/category")
    public List<Product> fetchAllProductsByCategory(@RequestParam(name = "category") String category){
        return productService.getAllProductsByCategory(category);
    }
    //get all by JSON query 
    @GetMapping("/retailprice")
    public List<Product> fetchAllRetailPriceGreaterThan(@RequestParam(name = "retailPrice") float retailPrice){
        return productService.getAllRetailPriceGreaterThan(retailPrice);
    }
    
}