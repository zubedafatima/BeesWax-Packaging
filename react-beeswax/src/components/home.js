import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import styles from "../styles/HomeStyle.module.css";
import homepag1 from "../images/homepage.jpg";
import homepag2 from "../images/homepage2.png";

export function Home () {
  return (
    <div className={styles.body}>
    <div className={styles.containerFluid}>
      <div className={styles.carousel}>
        <div className={styles.carouselImg}>
          <img src={homepag1} alt=""/>
        </div>

        <div className={styles.carouselText2}>
          <h1>Bees Wax Packaging</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, quasi facere assumenda, saepe error consequatur ex
            expedita unde voluptate, eius perspiciatis accusantium. Quis,
            cupiditate Corporis adipisci odit repellendus impedit rem.
          </p>
        </div>
      </div>
      <div className={styles.midline}>
        <h1>Embark On The Journey Of Sustainability</h1>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.subContainerImage}>
          <img src={homepag2} alt=""/>
        </div>
        <div className={styles.subContainerText}>
          <h1> Reduce your use of plastics in the new year! </h1>
          <button className={styles.shopNowButton}>
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <p>© 2024 BeesWax Packaging. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};