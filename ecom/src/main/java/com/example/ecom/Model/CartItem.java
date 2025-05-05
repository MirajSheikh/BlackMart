package com.example.ecom.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cart_id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "prod_id", referencedColumnName = "prod_id")
    private Product product;

    private Long quantity;

    public Long getCart_id() {
        return cart_id;
    }

    public void setCart_id(Long cart_id) {
        this.cart_id = cart_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public CartItem(Long cart_id, User user, Product product, Long quantity) {
        this.cart_id = cart_id;
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }

    public CartItem() {
    }
}
