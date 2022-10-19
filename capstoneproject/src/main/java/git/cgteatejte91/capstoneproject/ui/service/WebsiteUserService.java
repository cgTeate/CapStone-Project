package git.cgteatejte91.capstoneproject.ui.service;

import java.util.Optional;

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

    private final WebsiteUserRepository websiteUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return websiteUserRepository.findByEmail(email).orElseThrow(() ->
            new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUp(WebsiteUser websiteUser){
        boolean userExists = websiteUserRepository.findByEmail(websiteUser.getEmail())
        .isPresent();
        if(userExists){
            throw new IllegalStateException("email already taken"); 
        }
        String encodedPassword = bCryptPasswordEncoder.encode(websiteUser.getPassword());
        websiteUser.setPassword(encodedPassword);
        websiteUserRepository.save(websiteUser);
        //TODO: send token
        return "it works";
    }
    
}
