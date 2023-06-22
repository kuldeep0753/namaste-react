import {React,useState,useEffect} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";


const Header = () => {
  // let btnName="Login";
  // let btn=true;
  let [btnName,setBtn]=useState("Login");
  // function LoginButton(){
   
  //   if(btn===true && btnName=="Logout"){
  //     setBtn("Login");
  //     btn=false;
  //     console.log("in");
  //   }
  //   else{
  //     setBtn("Logout");
  //     btn=true;
  //     console.log("out");
  //   }
  // }
  console.log("outer header")
  useEffect(()=>console.log("header"),[]);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="not load"
            className="logo"
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About Us</Link></li>
            <li> <Link to="/contact">Contact Us</Link></li>
            
            <button className="login-btn" onClick={()=>{btnName === "Login" ?setBtn("Logout"):setBtn("Login")}}>{btnName}</button>
          </ul>
    
        </div>
      </div>
    );
  };

  export default Header;