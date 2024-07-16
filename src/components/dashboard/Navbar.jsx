import "./Navbar.css";
import logo from "../../assets/logo.png";
import account from "../../assets/account.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <img style={{ marginLeft: '5px' }} src={logo} alt="" />
        <span>Financial DASHBOARD <sub>**Manage your business**</sub></span>
        <img className="account" src={account} alt="" />
    </div>
  )
}

export default Navbar
