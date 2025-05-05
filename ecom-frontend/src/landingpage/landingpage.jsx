import { useNavigate } from "react-router-dom";
import Grid4 from "./grid4";
import styles from "./landingpage.module.css"
import RandomItems from "./randomItems";
import Carousel from "./slider";

const LandingPage = () => {

  const navigate = useNavigate();

  return(

    <div className={styles.landingPageContainer}>

      <div className={styles.welcomeBanner}>
        <div>
          <h1>Shop into the Future with <span style={{color: 'hsl(180, 100%, 70%)', fontFamily: 'Audiowide, sans-serif'}}>BlackMart</span></h1>
          <h2>Get the Latest Products delivered instantly with our <span style={{color: 'hsl(60, 100%, 70%)', fontFamily: 'Orbitron, sans-serif'}}>Time Machine</span></h2>
          <button className={styles.homeButton} onClick={() => navigate('/category')}>Shop</button>
        </div>
        <img src="welcomeBannerImage.jpg" alt="welcome banner" />
      </div>
      
      <div className={styles.offerPanel}>
        <Carousel />
      </div>

      <div className={styles.gridContainer}>
      <Grid4 
        title="Most Popular"
        image1="grid1image1.webp" desc1="DC Comics Batman: Rebirth Men's Perfumes"
        image2="grid1image2.webp" desc2="French Connection Automatic Men Watch Leather"
        image3="grid1image3.webp" desc3="Zara Men's Basic Medium Weight T-Shirt"
        image4="grid1image4.webp" desc4="Apple iPhone 16" 
      />
      <Grid4 
        title="Best Deals Today!"
        image1="grid2image1.webp" desc1="The Souled Store Men's Urban Blaze Mocha Sneakers"
        image2="grid2image2.webp" desc2="Google Pixel 9a"
        image3="grid2image3.webp" desc3="Skinn By Titan Raw Men"
        image4="grid2image4.webp" desc4="Zara Chunky Multi-Piece Trainers" 
      />
      <Grid4 
        title="--Limited Time Deals--"
        image1="grid3image1.webp" desc1="OnePlus Buds 3 Pro Earbuds"
        image2="grid3image2.webp" desc2="Mydesignation Conquer Oversized Tshirt"
        image3="grid3image3.webp" desc3="What The Flex Oversized Heavyweight T-shirt"
        image4="grid3image4.webp" desc4="Red Tape Women Colorblocked Lifestyle Sneakers" 
      />
      <Grid4 
        title="Explore Upcoming Products"
        image1="grid4image1.webp" desc1="Kreo Hive Full Size Wired Gaming Mechanical Keyboard"
        image2="grid4image2.webp" desc2="Anime One Piece Roronoa Zoro Action Figure"
        image3="grid4image3.webp" desc3="AUGEN Super Hero Satoru Gojo Jujutsu Kaisen"
        image4="grid4image4.webp" desc4="Logitech G502 X Lightspeed Plus Wireless" 
      />
      </div>


      <div className={styles.randomItemsSlider}>
        <p>Recommended for You</p>
        <RandomItems />
      </div>

      <div className={styles.specialOffer}>

      </div>
      <div className={styles.specialOffer}>

      </div>


    </div>

  );

}

export default LandingPage
