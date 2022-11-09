package git.cgteatejte91.capstoneproject.ui.registration;

import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.User.UserRole;
import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.service.User.WebsiteUserService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final WebsiteUserService websiteUserService;

    public String register(RegistrationRequest request) {
        
        return websiteUserService.signUp(
            new WebsiteUser(
                    request.getFirstName(),
                    request.getLastName(),
                    request.getUsername(),
                    request.getPassword(),
                    request.getRole(),
                    request.getDob(), 
                    request.getPhoneNumber(),
                    request.getGender(), 
                    request.getAddress(), 
                    request.getCreated()
            )
    );

    
    }

}
