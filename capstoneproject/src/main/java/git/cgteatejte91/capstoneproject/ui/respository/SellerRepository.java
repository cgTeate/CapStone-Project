package git.cgteatejte91.capstoneproject.ui.respository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.Seller;

@Repository
public interface SellerRepository extends MongoRepository<Seller, String>{
    
}
