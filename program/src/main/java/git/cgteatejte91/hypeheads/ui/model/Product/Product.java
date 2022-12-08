package git.cgteatejte91.hypeheads.ui.model.Product;



import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.client.gridfs.model.GridFSFile;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Data
@Document()
public class Product{
    @Id
    private String id;
    private String category;
    private String productName;
    private String slug;
    private String brand;
    //@Indexed(unique = true)
    private String styleId;
    private String colorway;
    private String size;
    private float retailPrice;
    private float resellPrice;
    private LocalDate releaseDate;
    private String thumbnail;
    private int countInStock;
    private String description;
    private String designer;
    private String created = LocalDateTime.now().toString();
    //private GridFSFile productImage;
    // @Transient
    // private Integer age;

    public Product(String category, String productName, String slug, String brand, String styleId, String colorway,
            String size, float retailPrice, float resellPrice, LocalDate releaseDate, String thumbnail, 
            int countInStock, String description, String designer, String created) {
        this.category = category;
        this.productName = productName;
        this.slug = slug;
        this.brand = brand;
        this.styleId = styleId;
        this.colorway = colorway;
        this.size = size;
        this.retailPrice = retailPrice;
        this.resellPrice = resellPrice;
        this.releaseDate = releaseDate;
        this.thumbnail = thumbnail;
        this.countInStock = countInStock;
        this.description = description;
        this.designer = designer;
        this.created = created;
    }

    // public Integer getAgeOfProduct() {
    //     return Period.between(this.releaseDate, LocalDate.now()).getYears();
    // }
    
}
