package com.example.ecom.Controller;

import com.example.ecom.Model.CartItem;
import com.example.ecom.Repository.CartRepository;
import com.example.ecom.Service.CartService;
import com.example.ecom.dto.CartRequestDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartService cartService;
    private final CartRepository cartRepository;

    public CartController(CartService cartService, CartRepository cartRepository){
        this.cartService = cartService;
        this.cartRepository = cartRepository;
    }

    @PostMapping
    public ResponseEntity<?> addToCart(@RequestBody CartRequestDTO cartRequest){
        cartService.addToCart(cartRequest);
        return ResponseEntity.ok("Added to Cart");
    }

    @GetMapping
    public ResponseEntity<?> getCart(){
        List<CartItem> fullCart = cartService.getCart();
        return new ResponseEntity<>(fullCart, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserCart(@PathVariable Long userId){
        List<CartItem> userCart = cartService.getUserCart(userId);
        return ResponseEntity.ok(userCart);
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long cartId){
        cartService.deleteCartItem(cartId);
        return ResponseEntity.ok("Removed Item from Cart");
    }

    @PatchMapping("/{cartId}")
    public ResponseEntity<?> updateQuantity(@PathVariable Long cartId, @RequestBody CartRequestDTO updatedItem){
        cartService.updateQuantity(cartId, updatedItem);
        return ResponseEntity.ok("Updated Quantity");
    }
}
