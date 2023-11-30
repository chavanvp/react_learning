import { Logo_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div className="company-logo">
          <img
            className="logo"
            src={Logo_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>home</li>
            <li>About us</li>
            <li>contact us</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header