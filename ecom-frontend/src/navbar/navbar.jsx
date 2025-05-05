import styles from "./navbar.module.css"
import logo from "../assets/blackmart_logo.png"
import profilePic from "../assets/defaultUserProfile.jpg"
import logoutButton from "../assets/power_button.png"
import { Link } from "react-router-dom"
import React, { useEffect, useRef, useState } from "react"

const NavBar = ({ user, setUser }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const profileMenuRef = useRef();
  const profileMenuRef2 = useRef();
  const burgerMenuRef = useRef();
  const burgerMenuRef2 = useRef();

  useEffect(() => {

    function handleClickOutside(event){
      if(profileMenuRef.current && !profileMenuRef.current.contains(event.target) && profileMenuRef2.current && !profileMenuRef2.current.contains(event.target)){
        setProfileOpen(false)
      }
      if(burgerMenuRef.current && !burgerMenuRef.current.contains(event.target) && burgerMenuRef2.current && !burgerMenuRef2.current.contains(event.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }


  }, [profileOpen])

  function handleLogout(){

    localStorage.removeItem("user")
    setUser(null)
    window.location.href = "/login"

  }

  return(
    <div className={styles.navBar}>
      <div className={styles.logoAndTitle}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <h4>BlackMart</h4>
      </div>

      <div ref={burgerMenuRef2} className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
        
        {
           user
            ? <div className={`${styles.loginNav} ${isOpen ? styles.showNav: ""}`}>
                <Link to="/">Profile</Link>
              </div>
            : <div className={`${styles.loginNav} ${isOpen ? styles.showNav: ""}`}>
                <Link to="/login">Login</Link>
              </div>
        }

        <Link to="/category">Store</Link>
        <Link to="/mobilephones">Mobile Phones</Link>
      </div>

        <div ref={profileMenuRef2} className={`${styles.profileMenu} ${profileOpen ? styles.showMenu : ""}`}>
          <img 
            src={logoutButton} 
            alt="logout" 
            className={styles.logoutButton} 
            onClick={handleLogout} />

          <Link to="/">Profile</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/">Settings</Link>
          <div className={styles.darkMode}>
            <Link to="/">Dark Mode</Link>
            <button className={styles.darkModeToggle}>🌙</button>
          </div>

        </div>

      <div ref={burgerMenuRef} className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        🔗
      </div>
      
      <div ref={profileMenuRef} className={styles.profilePicContainer}>
        {
          user
            ? <div className={styles.ppcCartAndProfilePic}>
              <Link to="/cart"><span style={{'fontSize': "2.5rem"}}>🛒</span></Link>
              <img 
                src={profilePic}
                alt="user profile"
                className={styles.profilePic}
                onClick={() => setProfileOpen(!profileOpen)} />
              </div>
            : <Link to="/login"><button className={styles.navLoginButton}>Login</button></Link>
        }
      </div>


    </div>
  );

}

export default NavBar
