import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/products/bookstore.jpeg";
import "./Home.css"

export const Home = () => {
  return (
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Infinity Bookstore </h1>
        <p> chose your favourite books </p>
        <Link to="/">
          <button> ORDER NOW </button>
        </Link>
      </div>
      
      
    </div>




  
  );
}
