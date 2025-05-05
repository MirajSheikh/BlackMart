import { useEffect, useState } from "react";
import styles from "./cart.module.css"
import CartItem from "./cartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = ( {user} ) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if(user && user.id){
      axios.get(`http://localhost:8080/cart/${user.id}`)
      .then(response => setCart(response.data))
      .catch(error => console.log(error));
    }
  }, [user])

  const subTotal = cart.reduce((acc, currItem) => {
    return acc + (currItem.product.prodPrice * currItem.quantity)
  }, 0)

  const handleCartChange = () => {
     axios.get(`http://localhost:8080/cart/${user.id}`)
    .then(response => setCart(response.data))
    .catch(error => console.log(error));
  }

  const navigate = useNavigate();

  return(

    <div className={styles.cartContainer}>

      <h1 className={styles.cartTitle}>Shopping Cart<hr/></h1>

      {cart.map(cartItem => (
        <CartItem 
          key={cartItem.cart_id} 
          cartItem={cartItem} 
          onCartChange={handleCartChange}
          imageId={cartItem.product.prodId}
        />
      ))}

      {cart.length === 0 
        ? <div className={styles.emptyCart}>
            <h2>Your Cart is Empty 🥲</h2>
            <h4>Explore our Store and Fill your Cart</h4>
            <button onClick={() => navigate("/category")}>Shop</button>
          </div>
        : <h2 className={styles.subTotal}>
          <span style={
            {
              'color': "hsl(180, 100%, 70%)",
              'fontFamily': "Audiowide"
            }
          }>
            Cart Total
          </span> : Rs.{subTotal}</h2>
}
      
    </div>

  );

}

export default Cart
