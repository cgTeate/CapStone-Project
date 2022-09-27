package git.cgteatejte91.capstoneproject.ui.respository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;

@Repository
public interface WebsiteUserRepository extends MongoRepository<WebsiteUser, String>{
    
}
