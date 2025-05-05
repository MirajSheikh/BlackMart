import { useEffect, useState } from 'react';
import ProductBlock from './productBlock.jsx';
import styles from './productPage.module.css';
import axios from 'axios';

const Category = ( {category, title, user, image} ) => {

  const [products, setProducts] = useState([]);
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/category/${category}`)
    .then(response => setProducts(response.data))
  }, [])

  useEffect(() => {
    if(user && user.id){
      axios.get(`http://localhost:8080/cart/${user.id}`)
      .then(response => setUserCart(response.data))
      .catch(error => console.log(error))
    }
  }, [user])

  const productIds = userCart.map(item => item.product.prodId)

  return(
    <>
      <div className={styles.categoryBanner}>
        <h1 className={styles.pageTitle}>{title}</h1>
        <img src={`${category}.webp`} alt={`${title}`} />
      </div>

      <div className={styles.pageContainer}>

        {products.map(product => (

          <ProductBlock key={product.prodId} product={product} user={user} productIds={productIds} />

        ))}

      </div>
    </>
  );

}

export default Category
