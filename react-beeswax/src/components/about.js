import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import "../styles/AboutStyle.css";
import extra1 from "../images/Extractable1.jpg";
import extra2 from "../images/Extractable2.jpg";
import extra3 from "../images/Extractable3.jpg";

export function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="infohead">
          <h1>About Us</h1>
        </div>
        <div className="sub-container">
          <div className="product-section">
            <div className="product-card">
              <div className="product-img">
                <img src={extra1} alt="" />
              </div>
              <div className="card-overlay">
                <div className="product-details">
                  <div className="sub-details"></div>
                  <div className="product-info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a voluptatum expedita inventore cupiditate! Deserunt placeat nam eligendi quibusdam dicta quos. Cumque pariatur ea aliquid excepturi deserunt consectetur debitis consequatur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={extra2} alt="" />
              </div>
              <div className="card-overlay">
                <div className="product-details">
                  <div className="sub-details"></div>
                  <div className="product-info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a voluptatum expedita inventore cupiditate! Deserunt placeat nam eligendi quibusdam dicta quos. Cumque pariatur ea aliquid excepturi deserunt consectetur debitis consequatur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={extra3} alt="" />
              </div>
              <div className="card-overlay">
                <div className="product-details">
                  <div className="sub-details"></div>
                  <div className="product-info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a voluptatum expedita inventore cupiditate! Deserunt placeat nam eligendi quibusdam dicta quos. Cumque pariatur ea aliquid excepturi deserunt consectetur debitis consequatur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buffer"></div>
      
      <div className="footer">
        <p>© 2024 BeesWax Packaging. All rights reserved.</p>
      </div>
    </>
  );
}
