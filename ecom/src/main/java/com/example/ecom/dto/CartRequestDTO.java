package com.example.ecom.dto;

public class CartRequestDTO {
    private Long userID;
    private Long prodID;
    private Long quantity;

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getProdID() {
        return prodID;
    }

    public void setProdID(Long prodID) {
        this.prodID = prodID;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
