import { useEffect, useState } from "react";
import styles from "./productBlock.module.css"
import axios from "axios";
import MessageWindow from "./messagewindow";

const ProductBlock = ( {product, user, productIds} ) => {

  const [quantity, setQuantity] = useState(0);
  const [inCart, setInCart] = useState(false);
  const [message, setMessage] = useState(null)

  function handleAddToCart(){

    if(quantity < 1){
      setMessage("Please Select 1 or more quantity to Add in Cart 🥺")
      setTimeout(() => setMessage(null), 4000)
      return
    }

    if(productIds.includes(product.prodId)){
      setMessage("Product is already Added in Cart 😅")
      setTimeout(() => setMessage(null), 2000)
      return
    }

    const requestObj = {
      "userID": user.id,
      "prodID": product.prodId,
      "quantity": quantity
    }

    axios.post("http://localhost:8080/cart", requestObj)
    .then(response => console.log(response.data))
    .then(setInCart(true))
    .catch(error => console.log(error))

    setMessage(`Added ${quantity} ${quantity>1 ? `Items` : `Item`} To Cart 😁`)
    setTimeout(() => setMessage(null), 2000)
  }

  function handleIncrement(){
    setQuantity(quantity+1)
  }

  function handleDecrement(){
    quantity > 0 && setQuantity(quantity-1)
  }

  const imagepath = `prod${product.prodId}.webp`

  return(

    <>
      {message && <MessageWindow message={message} />}
      <div className={styles.productContainer}>


        <div className={styles.productImage}>
          <img src={imagepath} alt="product image" />
        </div>

        <div className={styles.productInfo}>
          <h1>{product.prodName}</h1>
          <h3>Rs.{product.prodPrice}</h3>

          <div className={styles.ratings}>
            Rating
          </div>

          <h3>{product.available ? "In Stock" : "Out of Stock"}</h3>

        </div>

        {user && 
          <div className={styles.cartAndQuantity}>
            <div className={styles.quantity}>
              <button onClick={handleDecrement}>-</button>
              <p className={styles.quantityCount}>{quantity}</p>
              <button onClick={handleIncrement}>+</button>
            </div>

          <button onClick={handleAddToCart} className={inCart ? `${styles.inCart}` : `${styles.notInCart}`}>{`🛒`}</button>

          </div>}

      </div>
    </>

  );

}

export default ProductBlock
