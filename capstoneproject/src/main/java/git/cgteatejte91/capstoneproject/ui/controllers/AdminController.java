package git.cgteatejte91.capstoneproject.ui.controllers;

import static git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUserPermission.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.Product.Product;
import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUserPermission;
import git.cgteatejte91.capstoneproject.ui.service.Product.ProductService;
import git.cgteatejte91.capstoneproject.ui.service.User.WebsiteUserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("management/api/websiteuser")
@AllArgsConstructor
public class AdminController {
    @Autowired
    private final WebsiteUserService websiteUserService;
    private final ProductService productService;

    //get user information with admin role
    // @PostMapping("/user")
    @PostMapping(path = "{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public WebsiteUser fetchUser(@PathVariable("username") String username){
        return websiteUserService.getUser(username);
    }
    //get all users information with admin role
    @GetMapping("/users")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<WebsiteUser> fetchAllUsers(){
        return websiteUserService.getAllUsers();
    }
    //get all seller information with admin role
    @GetMapping("/sellers")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    //TODO: Need to implement authorization for role
    // @PreAuthorize("hasAuthority('SELLER')")
    public List<WebsiteUser> fetchAllSellers(){
        return websiteUserService.getAllSellers();
    }
    //get all customer information with admin role
    @GetMapping("/customers")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    //TODO: Need to implement authorization for role
    // @PreAuthorize("hasAuthority('CUSTOMER')")
    public List<WebsiteUser> fetchAllCustomers(){
        return websiteUserService.getAllCustomers();
    }
    //delete user with admin role 
    @DeleteMapping(path = "{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteUser(@PathVariable("username") String username) {
        websiteUserService.deleteUser(username);
    }

    //add new product
    @PostMapping("/products")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }
    //delete product 
    @DeleteMapping(path = "{productId}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteProduct(@PathVariable("productId") String productId) {
        productService.deleteProduct(productId);
    }

    // //get users individual info
    // @PostMapping(path = "{username}")
    // @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    // public WebsiteUser fetchUser(@PathVariable("username") String username){
    //     return websiteUserService.getUser(username);
    // }
    
    // //update admin user info
    // @PutMapping(path = "{username}")
    // @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    // public void updateUser(@PathVariable("username") String username, @RequestBody WebsiteUser user){
    //         websiteUserService.updateUser(username, user);
    //     }

}