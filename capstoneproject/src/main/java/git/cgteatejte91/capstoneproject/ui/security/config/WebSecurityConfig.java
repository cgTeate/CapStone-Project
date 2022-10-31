package git.cgteatejte91.capstoneproject.ui.security.config;

import git.cgteatejte91.capstoneproject.ui.filter.CustomAuthenticationFilter;
import git.cgteatejte91.capstoneproject.ui.filter.JwtTokenVerifier;
import git.cgteatejte91.capstoneproject.ui.service.WebsiteUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.util.concurrent.TimeUnit;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final WebsiteUserService websiteUserService;

    @Autowired
    public WebSecurityConfig(PasswordEncoder passwordEncoder,
                                     WebsiteUserService websiteUserService) {
        this.passwordEncoder = passwordEncoder;
        this.websiteUserService = websiteUserService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
        .addFilter(new CustomAuthenticationFilter(authenticationManager()))
        .addFilterAfter(new JwtTokenVerifier(), CustomAuthenticationFilter.class)
        .authorizeRequests().antMatchers("/", "index", "/css/*", "/js/*","/api/**","/api/registration/**", "/api/login/**").permitAll()
        // .antMatchers("/api/**").hasRole(STUDENT.name())
        .anyRequest().authenticated();
                
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(websiteUserService);
        return provider;
    }

}