package git.cgteatejte91.capstoneproject.ui.respository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;

@Repository
public interface WebsiteUserRepository extends MongoRepository<WebsiteUser, String>{

    Optional<WebsiteUser> findByEmail(String email);
    Optional<WebsiteUser> findByPassword(String password);
    WebsiteUser findUserByEmail(String email);
    
}
