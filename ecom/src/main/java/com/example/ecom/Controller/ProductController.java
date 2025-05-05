package com.example.ecom.Controller;

import com.example.ecom.Model.Product;
import com.example.ecom.Service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> allProducts = productService.getAllProducts();
        return new ResponseEntity<>(allProducts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> getProdById(@PathVariable Long id){
        Optional<Product> selectedProduct = productService.getProdById(id);
        return new ResponseEntity<>(selectedProduct, HttpStatus.OK);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<?> getProdByCategory(@PathVariable String category){
        List<Product> categoryProducts = productService.getProdByCategory(category);
        return new ResponseEntity<>(categoryProducts, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestBody Product product){
        productService.addProduct(product);
        return ResponseEntity.ok("Added Product");
    }

}
