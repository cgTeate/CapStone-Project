package git.cgteatejte91.capstoneproject.ui.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.service.WebsiteUserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/websiteuser")
@AllArgsConstructor
public class WebsiteUserController {
    @Autowired
    private final WebsiteUserService websiteUserService;

    @GetMapping("/user")
    public WebsiteUser fetchUser(String username){
        return websiteUserService.getUser(username);
    }
    @GetMapping("/users")
    public List<WebsiteUser> fetchAllUsers(){
        return websiteUserService.getAllUsers();
    }
    @GetMapping("/sellers")
    @PreAuthorize("hasAnyRole('SELLER')")
    public List<WebsiteUser> fetchAllSellers(){
        return websiteUserService.getAllSellers();
    }
    @GetMapping("/customers")
    @PreAuthorize("hasAnyRole('CUSTOMER')")
    public List<WebsiteUser> fetchAllCustomers(){
        return websiteUserService.getAllCustomers();
    }

    @DeleteMapping(path = "{sellerId}")
    public void deleteUser(@PathVariable("sellerId") String sellerId) {
        websiteUserService.deleteUser(sellerId);
    }

    @PutMapping(path = "{sellerId}")
    public void updateUser(
        @PathVariable("sellerId") String sellerId, 
        @RequestParam(required = false) String firstName,
        @RequestParam(required = false) String lastName,
        @RequestParam(required = false) String email){
            websiteUserService.updateUser(firstName, lastName, email);
        }
}
