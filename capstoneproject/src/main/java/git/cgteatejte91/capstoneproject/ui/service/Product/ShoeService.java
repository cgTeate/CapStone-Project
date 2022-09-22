package git.cgteatejte91.capstoneproject.ui.service.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.Product.Shoe;
import git.cgteatejte91.capstoneproject.ui.respository.Product.ShoeRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ShoeService {

    @Autowired
    private final ShoeRepository shoeRepository;

    //get request
    public List<Shoe> getAllCustomers(){
        return shoeRepository.findAll();
    }

    //post request
    public void registerNewCustomer(Shoe shoe) {
        // Optional<Shoe> shoeOptional = shoeRepository
        //     .findShoeByBrand(shoe.getBrand());
        // if(shoeOptional.isPresent()) {   
        //     throw new IllegalStateException("email taken");
        // }
        shoeRepository.save(shoe);
    }

    //delete request
    public void deleteShoe(String shoeId) {
        boolean exists = shoeRepository.existsById(shoeId);
        if(!exists) {
            throw new IllegalStateException("Shoe with id " + shoeId + " does not exist");
    }
    shoeRepository.deleteById(shoeId);
    }
}