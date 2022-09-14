package git.cgteatejte91.capstoneproject;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

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
	CommandLineRunner runner(
		CustomerRepository repository, MongoTemplate mongoTemplate){
		return args -> {
			Address address = new Address(
				"United States",
				"Kansas",
				"66621"
			);
			String email = "calvin.teate@washburn.edu";
			Customer customer = new Customer(
				"Calvin",
				"Teater",
				"cgteate22",
				email,
				"7852150826",
				Gender.MALE,
				address,
				LocalDateTime.now()
			);
		//usingMongoTemplateAndQuery(repository, mongoTemplate, email, customer);
		repository.findCustomerByEmail(email)
				.ifPresentOrElse(c -> {
					System.out.println(c + " already exists");
				}, ()-> {System.out.println("Inserting customer " + customer);
				repository.insert(customer);
			});
		
		};
	}

	// private void usingMongoTemplateAndQuery(CustomerRepository repository, MongoTemplate mongoTemplate, String email,
	// 		Customer customer) {
	// 	Query query = new Query();
	// 	query.addCriteria(Criteria.where("email").is(email));

	// 	List<Customer> customers = mongoTemplate.find(query, Customer.class);

	// 	if(customers.size() > 1){
	// 		throw new IllegalStateException("found many students with email " + email);
	// 	}

	// 	if(customers.isEmpty()){
	// 		System.out.println("Inserting student " + customer);
	// 		repository.insert(customer);
	// 	} else{
	// 		System.out.println(customer + " already exists");
	// 	}
	// }

}
