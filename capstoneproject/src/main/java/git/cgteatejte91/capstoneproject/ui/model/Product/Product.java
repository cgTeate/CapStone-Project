package git.cgteatejte91.capstoneproject.ui.model.Product;



import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private String productName;
    @Indexed(unique = true)
    private String brand;
    private float retailPrice;
    private float resellPrice;
    private float size;
    private LocalDate releaseDate;
    private String description;
    private String colorway;
    private String designer;
    @Transient
    private Integer age;

    public Product(String productName, String brand, float retailPrice, float resellPrice, float size,
            LocalDate releaseDate, String description, String colorway, String designer) {
        this.productName = productName;
        this.brand = brand;
        this.retailPrice = retailPrice;
        this.resellPrice = resellPrice;
        this.size = size;
        this.releaseDate = releaseDate;
        this.description = description;
        this.colorway = colorway;
        this.designer = designer;
    }

    public Integer getAgeOfProduct() {
        return Period.between(this.releaseDate, LocalDate.now()).getYears();
    }
    
}
