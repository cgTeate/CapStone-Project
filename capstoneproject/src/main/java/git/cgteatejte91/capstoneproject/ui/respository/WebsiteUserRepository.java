package git.cgteatejte91.capstoneproject.ui.respository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;

@Repository
public interface WebsiteUserRepository extends MongoRepository<WebsiteUser, String>{

    Optional<WebsiteUser> findByUsername(String username);
    List<WebsiteUser> findWebsiteUserByUsername(WebsiteUser user);
    Optional<WebsiteUser> findByPassword(String password);
    //WebsiteUser findByUsername(String username);
    
    
}
