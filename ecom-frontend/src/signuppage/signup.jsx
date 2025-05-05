import styles from "../loginpage/login.module.css"
import logo from "../assets/blackmart_logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {

    e.preventDefault();

    const user = {email, password}

    try{
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

    const message = await response.text()
    alert(message)
    }catch(error){
      console.log("Signup error: ", error)
      alert("Something went wrong!")
    }

  }

  return(
    <div className={styles.cardNlogin}>
      <div className={styles.card}>
        
      </div>

      <div className={styles.login}>
        <img src={logo} alt="logo"></img>
        <h2>Sign Up</h2>
        <h4 className={styles.subTitle}>Create a BlackMart Account</h4>
        <form onSubmit={handleSignUp}>
          <input id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
          <button type="submit">Continue</button>
        </form>
        <h4 className={styles.subTitle}>Already have an Account... <Link to="/login">Sign in</Link></h4>
      </div>
    </div>
  );

}

export default SignUp
