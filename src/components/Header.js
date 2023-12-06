import { Logo_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="company-logo">
        <img className="logo" src={Logo_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
          <button className="login-btn" onClick={() => {
            btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login')
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
