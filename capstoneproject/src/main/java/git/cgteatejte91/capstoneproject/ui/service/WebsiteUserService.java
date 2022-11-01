package git.cgteatejte91.capstoneproject.ui.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.respository.WebsiteUserRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WebsiteUserService implements UserDetailsService{

    @Autowired
    private final WebsiteUserRepository websiteUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return websiteUserRepository.findByUsername(username).orElseThrow(() ->
            new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));
    }
    /*
     * //TODO: change to customerAuthenticationFilter
     */
    public String signUp(WebsiteUser websiteUser){
        boolean userExists = websiteUserRepository.findByUsername(websiteUser.getUsername())
        .isPresent();
        if(userExists){
            throw new IllegalStateException("email already taken"); 
            // return "email already taken";
        }
        String encodedPassword = bCryptPasswordEncoder.encode(websiteUser.getPassword());
        websiteUser.setPassword(encodedPassword);
        websiteUserRepository.save(websiteUser);
        //TODO: send token
        return "it works";
    }

    // public String signIn(WebsiteUser websiteUser){
    //     boolean userExists = websiteUserRepository.findByEmail(websiteUser.getUsername()).isPresent();
        
    //     if(!userExists){
    //         throw new IllegalStateException("wrong user name");
    //     }
    //    String dbpassword;
    //    WebsiteUser dbUser = websiteUserRepository.findUserByEmail(websiteUser.getUsername());
    //     dbpassword = dbUser.getPassword();

    //     if(bCryptPasswordEncoder.matches(websiteUser.getPassword(),dbpassword)){
    //         return "it works";
    //     }
    //     else{
    //         throw new IllegalStateException("wrong email or password");
    //     }
        
    // }

        //get request
    public List<WebsiteUser> getAllSellers(){
        return websiteUserRepository.findAll();
    }

    
}
