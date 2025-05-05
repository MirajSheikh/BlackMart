package com.example.ecom.Service;

import com.example.ecom.Model.Product;
import com.example.ecom.Repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProdById(Long id) {
        return productRepository.findById(id);
    }

    public List<Product> getProdByCategory(String category) {
        return productRepository.findByProdCat(category);
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }
}
