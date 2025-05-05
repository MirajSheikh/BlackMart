import styles from "./login.module.css"
import logo from "../assets/blackmart_logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const user = {email, password}

    try{
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      if(response.ok){
        const user = await response.json()
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
        navigate("/category")
      }
      else{
        const errMsg = await response.text()
        alert(errMsg)
      }
    }catch(error){
      console.log("Login error: ", error)
      alert("Cannot Login!")
    }

  }

  
  return(
    <div className={styles.cardNlogin}>
      <div className={styles.card}>
        
      </div>

      <div className={styles.login}>
        <img src={logo} alt="logo"></img>
        <h2>Sign In</h2>
        <h4 className={styles.subTitle}>Log in to your BlackMart Account</h4>
        <form onSubmit={handleLogin}>
          <input id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <h4>Forgot Password...</h4>
          <button type="submit">Login</button>
        </form>
        <h4 className={styles.subTitle}>Don't have an Account... <Link to="/signup">Sign up</Link></h4>
      </div>
    </div>
  );

}

export default Login
