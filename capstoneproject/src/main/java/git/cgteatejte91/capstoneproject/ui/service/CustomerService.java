// package git.cgteatejte91.capstoneproject.ui.service;

// import java.time.LocalDateTime;
// import java.util.Date;
// import java.util.List;
// import java.util.Objects;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

// import git.cgteatejte91.capstoneproject.ui.model.User.Customer;
// import git.cgteatejte91.capstoneproject.ui.respository.CustomerRepository;
// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @Service
// public class CustomerService {

//     @Autowired
//     private final CustomerRepository customerRepository;

//     //get request
//     public List<Customer> getAllCustomers(){
//         return customerRepository.findAll();
//     }

//     //post request
//     public void registerNewCustomer(Customer customer) {
//         Optional<Customer> customerOptional = customerRepository
//             .findCustomerByEmail(customer.getEmail());
//         if(customerOptional.isPresent()) {   
//             throw new IllegalStateException("email taken");
//         }
//         customerRepository.save(customer);
//     }

//     //delete request
//     public void deleteCustomer(String customerId) {
//         boolean exists = customerRepository.existsById(customerId);
//         if(!exists) {
//             throw new IllegalStateException("customer with id " + customerId + " does not exist");
//     }
//     customerRepository.deleteById(customerId);
//     }


//     //put request 
//     /*  
//      * no query used in studentRepository because of @Transactional
//      * where the entity goes into a managed state
//     */
//     @Transactional
//     public void updateCustomer(String customerId, String firstName, String lastName, String email) {
//             Customer customer = customerRepository.findById(customerId)
//                 .orElseThrow(() -> new IllegalStateException(
//                     "Customer with id " + customerId + " does not exist"));

            
//             if(firstName != null &&
//                     firstName.length() > 0 && 
//                     !Objects.equals(customer.getFirstName(), firstName)) {
//                 customer.setFirstName(firstName);
//             }

//             if(lastName != null &&
//                     lastName.length() > 0 && 
//                     !Objects.equals(customer.getLastName(), lastName)) {
//                 customer.setLastName(lastName);
//             }

//             if(email != null &&
//                     email.length() > 0 && 
//                     !Objects.equals(customer.getEmail(), email)) {
//                Optional<Customer> customerOptional = customerRepository
//                         .findCustomerByEmail(email);
//                 if(customerOptional.isPresent()) {
//                     throw new IllegalStateException("email taken");
//                 }
//                 customer.setEmail(email);
//             }
//     }

// }

