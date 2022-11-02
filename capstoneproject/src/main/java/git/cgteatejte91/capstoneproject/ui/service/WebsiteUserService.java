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
import org.springframework.transaction.annotation.Transactional;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.respository.WebsiteUserRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WebsiteUserService implements WebsiteUserDao, UserDetailsService{

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

    @Override
    public List<WebsiteUser> getAllCustomers() {
        // TODO Implement with role "CUSTOMER"
        return websiteUserRepository.findAll();
    }
    @Override
    public List<WebsiteUser> getAllSellers() {
        // TODO Implement with role "SELLER"
        return websiteUserRepository.findAll();
    }
    @Override
    public List<WebsiteUser> getAllUsers() {
        return websiteUserRepository.findAll();
    }
    @Override
    public WebsiteUser getUser(String username) {
        // TODO Might implement similar to loadUserByUsername()
        return websiteUserRepository.findUserByUsername(username);
    }

    @Override
    public void deleteUser(String username) {
        // TODO Changed delete method from original in CustomerService
        WebsiteUser user = websiteUserRepository.findByUsername(username).orElseThrow(() ->
        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));
        websiteUserRepository.delete(user);
    }

    @Override
    @Transactional
    public void updateUser(String firstName, String lastName, String username) {
        // TODO Implemented put request from CustomerService logic
        WebsiteUser user = websiteUserRepository.findByUsername(username).orElseThrow(() ->
            new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));

            if(firstName != null &&
                    firstName.length() > 0 && 
                    !Objects.equals(user.getFirstName(), firstName)) {
                user.setFirstName(firstName);
            }

            if(lastName != null &&
                    lastName.length() > 0 && 
                    !Objects.equals(user.getLastName(), lastName)) {
                user.setLastName(lastName);
            }

            if(username != null &&
                    username.length() > 0 && 
                    !Objects.equals(user.getUsername(), username)) {
               Optional<WebsiteUser> userOptional = websiteUserRepository
                        .findByUsername(username);
                if(userOptional.isPresent()) {
                    throw new IllegalStateException("email taken");
                }
                user.setUsername(username);
            }
        
    }
    
    @Override
    public String signUp(WebsiteUser websiteUser){
        //TODO: change to JWTAuthenticationFilter
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
    
    // @Override
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
    
}
