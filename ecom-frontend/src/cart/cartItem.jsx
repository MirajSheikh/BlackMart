import { useState } from "react";
import styles from "./cart.module.css"
import axios from "axios";
import MessageWindow from "../messagewindow";

const CartItem = ( {cartItem, onCartChange, imageId} ) => {

  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [message, setMessage] = useState(null)

  function handleDecrement(quantity, id){

    if(quantity === 1){
      setMessage("To Remove Item from Cart please press the 🗑️ Button")
      setTimeout(() => setMessage(null), 5000)
      return
    }

    const req = {
      userID: cartItem.user.id,
      prodID: cartItem.product.prodId,
      quantity: quantity-1,
    }

    axios.patch(`http://localhost:8080/cart/${id}`, req)
    .then(() => onCartChange())
    .catch(err => console.log(err))

    setQuantity(quantity-1)
  }

  function handleIncrement(quantity, id){

    const req = {
      userID: cartItem.user.id,
      prodID: cartItem.product.prodId,
      quantity: quantity+1,
    }

    axios.patch(`http://localhost:8080/cart/${id}`, req)
    .then(() => onCartChange())
    .catch(err => console.log(err))


    setQuantity(quantity+1);
  }

  function handleRemoveItem(id){
    setMessage("Removed Item from Cart")

    setTimeout(() => 
      axios.delete(`http://localhost:8080/cart/${id}`)
      .then(() => onCartChange())
      .catch(err => console.log(err))
    , 1000)

    setTimeout(() => setMessage(null), 1000)
  }

  return(
    <>
      {message && <MessageWindow message={message} />}
    <div className={styles.cartItem}>

      <div className={styles.imageHalf}>
        <img src={`prod${imageId}.webp`} alt="product image" />
      </div>

      <div className={styles.textHalf}>
        <div className={styles.itemDetails}>
          <h1 className={styles.itemName}>{cartItem.product.prodName}</h1>
          <h3 className={styles.itemDesc}>{cartItem.product.available ? `In Stock` : `Out of Stock`}</h3>
        </div>

        <div className={styles.quantity}>
          <button onClick={() => handleDecrement(quantity, cartItem.cart_id)}>-</button>
          <p className={styles.quantityCount}>{quantity}</p>
          <button onClick={() => handleIncrement(quantity, cartItem.cart_id)}>+</button>
          <button onClick={() => handleRemoveItem(cartItem.cart_id)} id={styles.removeItemButton}>🗑️</button>
        </div>
      </div>

      <div className={styles.itemPrice}>
        <p>Rs.{cartItem.product.prodPrice * quantity}</p>
      </div>

      
    </div>
    </>

  );

}

export default CartItem
