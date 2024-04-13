import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import "../styles/HomeStyle.css";
import homepag1 from "../images/homepage.jpg";
import homepag2 from "../images/homepage2.png";

export function Home () {
  return (
    <div className="container-fluid">
      <div className="carousel">
        <div className="carousel-img">
          <img src={homepag1} alt=""/>
        </div>

        <div className="carousel-text2">
          <h1>Bees Wax Packaging</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, quasi facere assumenda, saepe error consequatur ex
            expedita unde voluptate, eius perspiciatis accusantium. Quis,
            cupiditate Corporis adipisci odit repellendus impedit rem.
          </p>
        </div>
      </div>
      <div className="midline">
        <h1>Embark On The Journey Of Sustainability</h1>
      </div>
      <div className="sub-container">
        <div className="sub-containerimage">
          <img src={homepag2} alt=""/>
        </div>
        <div className="sub-containertext">
          <h1> Reduce your use of plastics in the new year! </h1>
          <button className="shop-now-button"> 
            <Link to="/products">Shop Now</Link> 
          </button>
        </div>
      </div>
      <div className="buffer"></div> 
      <div className="footer">
        <p>© 2024 BeesWax Packaging. All rights reserved.</p>
      </div>
    </div>
  );
};