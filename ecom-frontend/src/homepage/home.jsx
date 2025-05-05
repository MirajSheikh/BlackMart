import styles from "./home.module.css"
import Card from "../card/card"

function Home(){

  return(
    <>
      <div className={styles.categoryBanner}>
        <h1 className={styles.homeTitle}>Explore BlackMart</h1>
        <img src="categoryPage.webp" alt="Categories" />
      </div>

      <div className={styles.cardHolder}>
        <Card image="sneakers.webp" title="Sneakers" description="Starting @Rs.999" page="/sneakers" />
        <Card image="watches.webp" title="Watches" description="Starting @Rs.299" page="/watches"/>
        <Card image="tshirts.webp" title="T-Shirts" description="Starting @Rs.199" page="/tshirts"/>
        <Card image="toycars.webp" title="Toy Cars" description="Starting @Rs.299" page="/toycars" />
        <Card image="mshoes.webp" title="Men's Shoes" description="Starting @Rs.699" page="/mshoes" />
        <Card image="wshoes.webp" title="Women's Shoes" description="Starting @Rs.799" page="/wshoes"/>
        <Card image="perfumes.webp" title="Perfumes" description="Starting @Rs.249" page="/perfumes"/>
        <Card image="smartwatches.webp" title="Smart Watches" description="Starting @Rs.1199" page="/smartwatches"/>
        <Card image="mobilephones.webp" title="Mobile Phones" description="Starting @Rs.6499" page="/mobilephones"/>
        <Card image="earbuds.webp" title="Earbuds" description="Starting @Rs.499" page="/earbuds"/>
      </div>
    </>
);
  
}

export default Home
