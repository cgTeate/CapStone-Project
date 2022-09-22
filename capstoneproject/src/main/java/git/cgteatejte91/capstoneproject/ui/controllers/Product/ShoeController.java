package git.cgteatejte91.capstoneproject.ui.controllers.Product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.capstoneproject.ui.model.Product.Shoe;
import git.cgteatejte91.capstoneproject.ui.service.Product.ShoeService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/shoes")
@AllArgsConstructor
@CrossOrigin("*")
public class ShoeController {

    @Autowired
    private final ShoeService shoeService;

    @GetMapping
    public List<Shoe> fetchAllStudents(){
        return shoeService.getAllCustomers();
    }

    @PostMapping
    public void registerNewCustomer(@RequestBody Shoe shoe) {
        shoeService.registerNewCustomer(shoe);
    }

    @DeleteMapping(path = "{shoeId}")
    public void deleteCustomer(@PathVariable("shoeId") String shoeId) {
        shoeService.deleteShoe(shoeId);
    }
}