package git.cgteatejte91.capstoneproject.ui.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import git.cgteatejte91.capstoneproject.ui.respository.WebsiteUserRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WebsiteUserService implements UserDetailsService{

    private final WebsiteUserRepository websiteUserRepository;
    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return websiteUserRepository.findByEmail(email).orElseThrow(() ->
            new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
    }
    
}
