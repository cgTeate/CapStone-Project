package git.cgteatejte91.capstoneproject.ui.login;

import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.User.UserRole;
import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.service.WebsiteUserService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoginService {
    private final WebsiteUserService websiteUserService;

    public String login(LoginRequest request) {
        
        return "";
        
    //     websiteUserService.signIn(
    //         new WebsiteUser(
    //                 request.getUsername(),
    //                 request.getPassword()
    //         )
    // );
    
    }

}
