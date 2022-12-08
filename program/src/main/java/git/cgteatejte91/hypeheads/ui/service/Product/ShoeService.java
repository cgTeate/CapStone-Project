// package git.cgteatejte91.hypeheads.ui.service.Product;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import git.cgteatejte91.hypeheads.ui.model.Product.Shoe;
// import git.cgteatejte91.hypeheads.ui.respository.Product.ShoeRepository;
// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @Service
// public class ShoeService {

//     @Autowired
//     private final ShoeRepository shoeRepository;

//     //get request
//     public List<Shoe> getAllProducts(){
//         return shoeRepository.findAll();
//     }

//     //post request
//     public void AddProduct(Shoe shoe) {
//         Optional<Shoe> shoeOptional = shoeRepository
//             .findShoeByStyleId(shoe.getStyleId());
//         if(shoeOptional.isPresent()) {   
//             throw new IllegalStateException("product already exists");
//         }
//         shoeRepository.save(shoe);
//     }

//     //delete request
//     public void deleteProduct(String shoeId) {
//         boolean exists = shoeRepository.existsById(shoeId);
//         if(!exists) {
//             throw new IllegalStateException("Shoe with id " + shoeId + " does not exist");
//     }
//     shoeRepository.deleteById(shoeId);
//     }
// }