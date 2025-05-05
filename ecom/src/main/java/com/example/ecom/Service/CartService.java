package com.example.ecom.Service;

import com.example.ecom.Model.CartItem;
import com.example.ecom.Model.Product;
import com.example.ecom.Model.User;
import com.example.ecom.Repository.CartRepository;
import com.example.ecom.Repository.ProductRepository;
import com.example.ecom.Repository.UserRepository;
import com.example.ecom.dto.CartRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    private final UserRepository userRepository;

    private final ProductRepository productRepository;

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository, UserRepository userRepository, ProductRepository productRepository){
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public void addToCart(CartRequestDTO cartRequest) {
        User user = userRepository.findById(cartRequest.getUserID())
                .orElseThrow(() -> new RuntimeException("User not Found!"));
        Product product = productRepository.findById(cartRequest.getProdID())
                .orElseThrow(() -> new RuntimeException("Product not Found!"));

        CartItem cart = new CartItem();
        cart.setUser(user);
        cart.setProduct(product);
        cart.setQuantity(cartRequest.getQuantity());

        cartRepository.save(cart);
    }

    public List<CartItem> getCart() {
        return cartRepository.findAll();
    }

    public List<CartItem> getUserCart(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public void deleteCartItem(Long cartId) {
        cartRepository.deleteById(cartId);
    }

    public void updateQuantity(Long cartId, CartRequestDTO updatedItem) {
        User user = userRepository.findById(updatedItem.getUserID())
                .orElseThrow(() -> new RuntimeException("User not Found"));

        Product product = productRepository.findById(updatedItem.getProdID())
                .orElseThrow(() -> new RuntimeException("Product not Found"));

        CartItem newItem = new CartItem();
        newItem.setUser(user);
        newItem.setProduct(product);
        newItem.setCart_id(cartId);
        newItem.setQuantity(updatedItem.getQuantity());

        cartRepository.save(newItem);
    }
}
