package git.cgteatejte91.capstoneproject.ui.model.Product;

import java.time.LocalDate;

import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.client.gridfs.model.GridFSFile;

import lombok.NoArgsConstructor;

@NoArgsConstructor
@Document()
public class Shoe extends Product{

    public Shoe(String productName, String brand, float retailPrice, float resellPrice, float size,
            LocalDate releaseDate, String description, String colorway, String designer, GridFSFile productImage) {
        super(productName, brand, retailPrice, resellPrice, size, releaseDate, description, colorway, designer,
                productImage);
    }
    
}
