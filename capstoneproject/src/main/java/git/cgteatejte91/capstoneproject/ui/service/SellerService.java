
package git.cgteatejte91.capstoneproject.ui.service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import git.cgteatejte91.capstoneproject.ui.model.User.Seller;
import git.cgteatejte91.capstoneproject.ui.respository.SellerRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class SellerService {

    @Autowired
    private final SellerRepository sellerRepository;

    //get request
    public List<Seller> getAllSeller(){
        return sellerRepository.findAll();
    }

    //post request
    public void registerNewSeller(Seller seller) {
        Optional<Seller> sellerOptional = sellerRepository
            .findSellerByEmail(seller.getEmail());
        if(sellerOptional.isPresent()) {   
            throw new IllegalStateException("email taken");
        }
        sellerRepository.save(seller);
    }
    //post request
    public String checkExistingSeller(String email, String password) {

        Seller seller = sellerRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalStateException(
                    "Seller with " + email + " does not exist"));

                    if(email != null &&
                    email.length() > 0 && 
                    !Objects.equals(seller.getEmail(), email)) {
               Optional<Seller> sellerOptional = sellerRepository
                        .findSellerByEmail(email);
                if(sellerOptional.isPresent()) {
                    throw new IllegalStateException("email taken");
                }
                return seller.getEmail();
            }

                    if(password != null &&
                    password.length() > 0 && 
                    !Objects.equals(seller.getPassword(), password)) {
                return seller.getPassword();
            }

            

        // Optional<Seller> sellerOptional = sellerRepository
        //     .findSellerByEmail(seller.getEmail());
        // if(!sellerOptional.isPresent()) {   
        //     throw new IllegalStateException("User does not exist");
        // }
        return (seller.toString());
    }

    //delete request
    public void deleteSeller(String sellerId) {
        boolean exists = sellerRepository.existsById(sellerId);
        if(!exists) {
            throw new IllegalStateException("seller with id " + sellerId + " does not exist");
    }
    sellerRepository.deleteById(sellerId);
    }


    //put request 
    /*  
     * no query used in studentRepository because of @Transactional
     * where the entity goes into a managed state
    */
    @Transactional
    public void updateSeller(String sellerId, String firstName, String lastName, String email) {
            Seller seller = sellerRepository.findById(sellerId)
                .orElseThrow(() -> new IllegalStateException(
                    "Seller with id " + sellerId + " does not exist"));

            
            if(firstName != null &&
                    firstName.length() > 0 && 
                    !Objects.equals(seller.getFirstName(), firstName)) {
                seller.setFirstName(firstName);
            }

            if(lastName != null &&
                    lastName.length() > 0 && 
                    !Objects.equals(seller.getLastName(), lastName)) {
                seller.setLastName(lastName);
            }

            if(email != null &&
                    email.length() > 0 && 
                    !Objects.equals(seller.getEmail(), email)) {
               Optional<Seller> sellerOptional = sellerRepository
                        .findSellerByEmail(email);
                if(sellerOptional.isPresent()) {
                    throw new IllegalStateException("email taken");
                }
                seller.setEmail(email);
            }
    }

}

