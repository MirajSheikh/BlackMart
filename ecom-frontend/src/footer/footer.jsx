import { Link } from "react-router-dom";
import styles from "./footer.module.css"
import instagram from "../assets/insta.webp"
import reddit from "../assets/reddit.png"
import twitter from "../assets/x.jpg"
import linkedin from "../assets/linkedin.png"
import logo from "../assets/blackmart_logo.png"
const Footer = () => {

  return(

    <div className={styles.footerContainer}>

      <div className={styles.topSection}>
        <p>Back to Top</p>
      </div>
        
      <div className={styles.middleSection}>
        <div className={styles.info}>
          <div className={styles.companyInfo}>
            <h3>Company Info</h3>
            <h4>BlackMart</h4>
            <h4>HQ - Indore/Madhya Pradesh/India</h4>
            <h4>Join BlackMart</h4>
          </div>

          <div className={styles.shopCategories}>
            <h3>Shop Categories</h3>
            <h4>Sneakers</h4>
            <h4>T-Shirts</h4>
            <h4>Toy Cars</h4>
            <h4>Perfumes</h4>
            <h4>Men's Shoes</h4>
            <h4>Women's Shoes</h4>
          </div>
          
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>
            <h4>CEO - ceomiraj@blackmart.com</h4>
            <h4>Director - directormiraj@blackmart.com</h4>
            <h4>Customer Support - customerservice@blackmart.com</h4>
            <h4>Toll Free No. - 1800 420 6969</h4>
          </div>

          <div className={styles.partners}>
            <h3>Partners and Affiliates</h3>
            <h4>HnM</h4>
            <h4>Appel</h4>
            <h4>Xaomi</h4>
            <h4>Semsung</h4>
          </div>
        </div>
        <hr />
        <div className={styles.images}>
          <div className={styles.socialLinks}>
            <Link to="https://instagram.com/_.miraj00._" target="_blank" rel="noopener norefferer"><img src={instagram} alt="instagram" /></Link>
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener norefferer"><img src={twitter} alt="twitter" /></Link>
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener norefferer"><img src={reddit} alt="reddit" /></Link>
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener norefferer"><img src={linkedin} alt="linkedin" /></Link>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <p>BlackMart</p>
            <h3>India</h3>
          </div>
      </div>
      </div>
      <div className={styles.bottomSection}>
        <h5>Terms and Conditions</h5>
        <h5>Privacy Policy</h5>
        <h5>2025 BlackMart.com Inc.</h5>

      </div>

    </div>

  );

}

export default Footer
