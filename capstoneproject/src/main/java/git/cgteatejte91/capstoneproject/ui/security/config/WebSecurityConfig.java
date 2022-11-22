package git.cgteatejte91.capstoneproject.ui.security.config;

import git.cgteatejte91.capstoneproject.ui.jwt.JwtUsernameAndPasswordAuthenticationFilter;
import git.cgteatejte91.capstoneproject.ui.service.User.WebsiteUserService;
import git.cgteatejte91.capstoneproject.ui.jwt.JwtConfig;
import git.cgteatejte91.capstoneproject.ui.jwt.JwtTokenVerifier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static git.cgteatejte91.capstoneproject.ui.model.User.UserRole.*;

import java.util.Arrays;
import java.util.List;

import javax.crypto.SecretKey;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final WebsiteUserService websiteUserService;
    private final SecretKey secretKey;
    private final JwtConfig jwtConfig;

    @Autowired
    public WebSecurityConfig(BCryptPasswordEncoder bCryptPasswordEncoder,WebsiteUserService websiteUserService,
                                    SecretKey secretKey,
                                    JwtConfig jwtConfig) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.websiteUserService = websiteUserService;
        this.secretKey = secretKey;
        this.jwtConfig = jwtConfig;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
        .cors(Customizer.withDefaults()) // by default uses a Bean by the name of corsConfigurationSource
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
        .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager(), jwtConfig, secretKey))
        .addFilterBefore(new JwtTokenVerifier(secretKey, jwtConfig),JwtUsernameAndPasswordAuthenticationFilter.class)
        .authorizeRequests().antMatchers("/", "index", "/css/*", "/js/*",
                    "/api/registration/**", "/api/products/**","/api/orders/**", "/management/api/websiteuser/**").permitAll()
        .antMatchers("/api/websiteuser/**").hasAnyRole(CUSTOMER.name(),SELLER.name())
        //.antMatchers("/management/api/websiteuser/**").hasRole(ADMIN.name())
        .anyRequest().authenticated();
                
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(websiteUserService);
        return provider;
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // configuration.setAllowedOrigins(Arrays.asList("/*"));
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:8080"));
        // configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        configuration.setAllowedMethods(Arrays.asList("HEAD",
                "GET", "POST", "PUT", "DELETE", "PATCH"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        configuration.setExposedHeaders(List.of("Authorization"));
        // // setAllowCredentials(true) is important, otherwise:
        // // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
        // configuration.setAllowCredentials(true);
        // // setAllowedHeaders is important! Without it, OPTIONS preflight request
        // // will fail with 403 Invalid CORS request
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    

}