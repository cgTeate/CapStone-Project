package git.cgteatejte91.capstoneproject.ui.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import git.cgteatejte91.capstoneproject.ui.filter.CustomAuthenticationFilter;
import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;
import git.cgteatejte91.capstoneproject.ui.service.WebsiteUserService;
import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig  extends WebSecurityConfigurerAdapter {

    private final WebsiteUserService websiteUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    // CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManager(
    //     AuthenticationManagerBuilder auth));
    //WebSecurityConfigurerAdapter deprecated, so changed to below

@Autowired 
    public WebSecurityConfig(BCryptPasswordEncoder bCryptPasswordEncoder, WebsiteUserService websiteUserService) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.websiteUserService = websiteUserService;
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
        .authorizeRequests().antMatchers("/api/registration/**", "/api/login/**").permitAll()
        .anyRequest().authenticated();
              
    }

    // @Bean
    // public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    //     http.cors().and().csrf().disable()
    //     .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
    //     .authorizeRequests().antMatchers("/api/registration/**", "/api/login/**").permitAll()
    //     .anyRequest().authenticated();
    //         // .addFilter(customAuthenticationFilter);

    //     // http.authorizeRequests().antMatchers("/api/login/**", "/api/token/refresh/**").permitAll();
    //     // http.authorizeRequests().antMatchers(GET, "/api/user/**").hasAnyAuthority("ROLE_USER");
    //     // http.authorizeRequests().antMatchers(POST, "/api/user/save/**").hasAnyAuthority("ROLE_ADMIN");
    //     // http.authorizeRequests().anyRequest().authenticated();
    //     // .addFilter(customAuthenticationFilter)
    //     //      .addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);

    //     return http.build();
    // }

  


    // @Bean
    // public AuthenticationManager authenticationManagerBean() throws Exception {
    //     return authenticationManagerBean();
    // } 
    
//     @Bean
//     @Primary
//     public AuthenticationManagerBuilder authenticationManager(
//         AuthenticationManagerBuilder auth) throws Exception {
//     return auth.authenticationProvider(daoAuthenticationProvider());
// }


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

        // @Bean
        // public WebMvcConfigurer corsConfigurer() {
        //     return new WebMvcConfigurer() {
        //         @Override
        //         public void addCorsMappings(CorsRegistry registry) {
        //             registry.addMapping("/**")
        //                     .allowedMethods("*");
        //         }
        //     };
        // }

    

}
