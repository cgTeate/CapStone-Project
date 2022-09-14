package git.cgteatejte91.capstoneproject;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import git.cgteatejte91.capstoneproject.ui.model.Address;
import git.cgteatejte91.capstoneproject.ui.model.Customer;
import git.cgteatejte91.capstoneproject.ui.model.Gender;
import git.cgteatejte91.capstoneproject.ui.respository.CustomerRepository;

@SpringBootApplication
public class CapstoneprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CapstoneprojectApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(CustomerRepository repository){
		return args -> {
			Address address = new Address(
				"United States",
				"Kansas",
				"66621"
			);

			Customer customer = new Customer(
				"Calvin",
				"Teater",
				"cgteate22",
				"calvin.teater@washburn.edu",
				"7852150826",
				Gender.MALE,
				address,
				LocalDateTime.now()
			);
			repository.insert(customer);
		};
	}

}
