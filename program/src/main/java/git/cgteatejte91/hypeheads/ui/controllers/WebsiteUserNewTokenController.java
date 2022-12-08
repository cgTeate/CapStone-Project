package git.cgteatejte91.hypeheads.ui.controllers;

import static git.cgteatejte91.hypeheads.ui.model.User.WebsiteUserPermission.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
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

import git.cgteatejte91.hypeheads.ui.jwt.JwtConfig;
import git.cgteatejte91.hypeheads.ui.model.User.WebsiteUser;
import git.cgteatejte91.hypeheads.ui.model.User.WebsiteUserPermission;
import git.cgteatejte91.hypeheads.ui.service.User.WebsiteUserService;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/token")
@AllArgsConstructor
public class WebsiteUserNewTokenController {
    @Autowired
    private final WebsiteUserService websiteUserService;
    private final JwtConfig jwtConfig;
    private final SecretKey secretKey;
    
    //user gets new access token after updating profile
    @GetMapping(path = "/update/{username}")
    public void getNewAccessToken(@PathVariable("username") String username, HttpServletResponse response){
       WebsiteUser user = websiteUserService.getUser(username);

        String token = Jwts.builder()
            .setSubject(user.getUsername())
            .claim("authorities", user.getAuthorities())
            .setIssuedAt(new Date())
            .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusDays(jwtConfig.getTokenExpirationAfterDays())))
            .signWith(secretKey)
            .compact();
            // addHeader(jwtConfig.getAuthorizationHeader(), jwtConfig.getTokenPrefix() + token);

            // HttpHeaders headers = new HttpHeaders();
            // headers.add(jwtConfig.getAuthorizationHeader(), jwtConfig.getTokenPrefix() + token);
            response.addHeader(jwtConfig.getAuthorizationHeader(), jwtConfig.getTokenPrefix() + token);
            // return new ResponseEntity<String>(HttpStatus.OK);
            // return (ResponseEntity<String>) ResponseEntity.ok()
            // .header(jwtConfig.getAuthorizationHeader(), jwtConfig.getTokenPrefix() + token);
    }
}
