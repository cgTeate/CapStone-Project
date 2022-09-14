package git.cgteatejte91.capstoneproject.ui.respository;

import org.springframework.data.mongodb.repository.MongoRepository;

import git.cgteatejte91.capstoneproject.ui.model.WebsiteUser;

public interface WebsiteUserRepository extends MongoRepository<WebsiteUser, String>{
    
}
