import React from "react";
import Meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header= props=>{
  return (
    <React.Fragment>
    
    <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton/>
    </header>
    
    <div className={classes['main-image']}>
        <img src={Meals} alt="Failed to load Image"/>
    </div>
    </React.Fragment>
  )

}
export default Header;