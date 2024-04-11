import { useState } from "react";
import "../styles/cartStyle.css";
export function Cart(prop) {
  const [items, setItems] = useState([]);

  return (
    <>
      <div className="cart-container">
        <div className="division">
          <div className="left-container">
            <div className="top-div"></div>
            <div className="bottom-div"></div>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    </>
  );
}
