package git.cgteatejte91.hypeheads.ui.controllers;

import static git.cgteatejte91.hypeheads.ui.model.User.WebsiteUserPermission.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import git.cgteatejte91.hypeheads.ui.model.User.WebsiteUser;
import git.cgteatejte91.hypeheads.ui.model.User.WebsiteUserPermission;
import git.cgteatejte91.hypeheads.ui.service.User.WebsiteUserService;
import git.cgteatejte91.hypeheads.ui.updateprofile.WebsiteUserUpdateRequest;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/websiteuser")
@AllArgsConstructor
public class WebsiteUserController {
    @Autowired
    private final WebsiteUserService websiteUserService;

    //get users individual info
    // @PostMapping("/user")
    // @PostMapping(path = "{username}")
    // @PreAuthorize("hasAuthority('account:read')")
    // public WebsiteUser fetchUser(@PathVariable("username") String username){
    //     return websiteUserService.getUser(username);
    // }
    
    //able to get username with JWT
    @GetMapping("/username")
    @PreAuthorize("hasAuthority('account:read')")
    public String fetchUser(Authentication authentication){
        return authentication.getName();
    }
    //tryint to get all user info with JWT
    @GetMapping("/usernames")
    @PreAuthorize("hasAuthority('account:read')")
    public List<WebsiteUser> fetchUser(@AuthenticationPrincipal WebsiteUser websiteUser){
        return websiteUserService.getSingleUser(websiteUser);
    }

    //delete user
    @DeleteMapping(path = "{username}")
    @PreAuthorize("hasAuthority('account:write')")
    public void deleteUser(@PathVariable("username") String username) {
        websiteUserService.deleteUser(username);
    }
    //update user info
    @PutMapping(path = "/update/{username}")
    @PreAuthorize("hasAuthority('account:write')")
    public void updateUser(@PathVariable("username") String username, @RequestBody WebsiteUserUpdateRequest user){
            websiteUserService.updateUser(username, user);
        }
}
