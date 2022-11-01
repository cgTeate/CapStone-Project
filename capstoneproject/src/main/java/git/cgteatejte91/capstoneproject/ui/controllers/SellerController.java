
package git.cgteatejte91.capstoneproject.ui.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// import git.cgteatejte91.capstoneproject.ui.model.User.Seller;
import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
// import git.cgteatejte91.capstoneproject.ui.service.SellerService;
import git.cgteatejte91.capstoneproject.ui.service.WebsiteUserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/sellers")
@AllArgsConstructor
@CrossOrigin("*")
public class SellerController {

    @Autowired
    private final WebsiteUserService websiteUserService;

    @GetMapping()
    // @PreAuthorize("hasAnyRole('SELLER')")
    public List<WebsiteUser> fetchAllSellers(){
        return websiteUserService.getAllSellers();
    }

//     @PostMapping
//     public void registerNewSeller(@RequestBody Seller seller) {
//         sellerService.registerNewSeller(seller);
//     }

//     @DeleteMapping(path = "{sellerId}")
//     public void deleteSeller(@PathVariable("sellerId") String sellerId) {
//         sellerService.deleteSeller(sellerId);
//     }

//     @PutMapping(path = "{sellerId}")
//     public void updateSeller(
//         @PathVariable("sellerId") String sellerId, 
//         @RequestParam(required = false) String firstName,
//         @RequestParam(required = false) String lastName,
//         @RequestParam(required = false) String email){
//             sellerService.updateSeller(sellerId, firstName, lastName, email);
//         }
}