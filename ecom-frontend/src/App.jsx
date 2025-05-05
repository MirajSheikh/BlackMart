import NavBar from "./navbar/navbar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./homepage/home.jsx";
import Login from "./loginpage/login.jsx";
import SignUp from "./signuppage/signup.jsx";
import { useEffect, useState } from "react";
import Cart from "./cart/cart.jsx";
import Category from "./categoryPage.jsx";
import AddProduct from "./addproduct.jsx";
import Footer from "./footer/footer.jsx";
import LandingPage from "./landingpage/landingpage.jsx";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./scrolltotop.jsx";


function App() {

  document.title = "BlackMart"

  const [user, setUser] = useState(null)

  localStorage.setItem("subTotal", 0);

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if(savedUser){
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return(
    <>
    <Router>
      <NavBar user={user} setUser={setUser} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<Home />}/>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart user={user} />} />
        <Route path="/sneakers" element={<Category category="sneakers" title={"Sneakers"} user={user} image=""/>} />
        <Route path="/tshirts" element={<Category category="tshirts" title={"T-Shirts"} user={user}/>} image=""/>
        <Route path="/watches" element={<Category category="watches" title={"Watches"} user={user}/>} image=""/>
        <Route path="/toycars" element={<Category category="toycars" title={"Toy Cars"} user={user}/>} image=""/>
        <Route path="/mshoes" element={<Category category="mshoes" title={"Men's Shoes"} user={user}/>} image=""/>
        <Route path="/wshoes" element={<Category category="wshoes" title={"Women's Shoes"} user={user}/>} image=""/>
        <Route path="/perfumes" element={<Category category="perfumes" title={"Perfumes"} user={user}/>} image=""/>
        <Route path="/smartwatches" element={<Category category="smartwatches" title={"Smart Watches"} user={user}/>} image=""/>
        <Route path="/mobilephones" element={<Category category="mobilephones" title={"Mobile Phones"} user={user}/>} image=""/>
        <Route path="/earbuds" element={<Category category="earbuds" title={"Earbuds"} user={user}/>} image=""/>

        <Route path="/addproduct" element={<AddProduct />} />

      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App
