import { useState, useEffect } from "react";
import productData from "../productItems.json";
import bee from "../images/bees.jpg";

import "../styles/productStyle.css";
export function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item.id]);
    alert(`Added ${item.name} to cart!`);
    console.log(item.id);
  };
  return (
    <>
      <div class="container-fluid">
        <div class="carousel">
          <div class="carousel-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus, quasi facere assumenda, saepe error consequatur ex
              expedita unde voluptate, eius perspiciatis accusantium. Quis,
              cupiditate Corporis adipisci odit repellendus impedit rem.
            </p>
          </div>
        </div>
        <div class="sub-container">
          <div class="product-nav"></div>
          <div class="product-section">
            {products.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-img">
                  <img src={bee} alt="" />
                </div>
                <div className="card-overlay">
                  <div className="product-details">
                    <div className="sub-details">
                      <ul>
                        <li>{item.price}</li>
                        <li>{item.name}</li>
                      </ul>
                      <button onClick={() => addToCart(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-cart-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                      </button>
                    </div>
                    <div className="product-info">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
