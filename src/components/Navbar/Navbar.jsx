import { Grid } from "@mui/material";
import logo from "../../assets/logo.jpg";
import { SecurityUser, ShoppingCart } from "iconsax-react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="NavBar">
      <img src={logo} alt="logo" className="logo" />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="links"
      >
        <a href="#" className="selected">Home</a>
        <a href="#">About</a>
        <a href="#">Shope</a>
        <a href="#">Contact</a>
      </Grid>
      <div className="btn_nav_group">
        <ShoppingCart size="25" color="#30180d"  className="ShoppingCart"/>
        <button className="btn">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <SecurityUser size="25" color="#30180d" />
            <label>Se Connecter</label>
          </Grid>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
