package git.cgteatejte91.capstoneproject.ui.service.User;

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
        WebsiteUser user = websiteUserRepository.findByUsername(username).orElseThrow(() ->
        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));
        return user;
            // .stream()
            //     .filter(user -> username.equals(user.getUsername()))
            //     .findFirst()
            //     .orElseThrow(() -> new IllegalStateException(
            //             "User " + username + " does not exist"
            //     ));
    }

    @Override
    public void deleteUser(String username) {
        // TODO Changed delete method from original in CustomerService
        WebsiteUser user = websiteUserRepository.findByUsername(username).orElseThrow(() ->
        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));
        websiteUserRepository.delete(user);
    }

    @Override
    public void updateUser(String username, WebsiteUser user) {
        // TODO Implemented put request from CustomerService logic
           WebsiteUser userDb =  websiteUserRepository.findByUsername(username).orElseThrow(() ->
            new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));

            if(user.getFirstName() != null &&
                    user.getFirstName().length() > 0 && 
                    !Objects.equals(userDb.getFirstName(), user.getFirstName())) {
                        userDb.setFirstName(user.getFirstName());
            }

            if(user.getLastName() != null &&
                    user.getLastName().length() > 0 && 
                    !Objects.equals(userDb.getLastName(), user.getLastName())) {
                        userDb.setLastName(user.getLastName());
            }

            if(user.getUsername() != null &&
                user.getUsername().length() > 0 && 
                    !Objects.equals(userDb.getUsername(), user.getUsername())) {
                        userDb.setUsername(user.getUsername());
            }
            websiteUserRepository.save(userDb);
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
