import { useEffect, useState } from "react";
import "../styles/cartStyle.css";

export function Cart({ prop }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(prop); // Set items directly from prop
    console.log(prop);
  }, [prop]);

  return (
    <>
      <div className="cart-container">
        <div className="division">
          <div className="left-container">
            <div className="top-div"></div>
            <div className="bottom-div">
              <ul>
                {items.map((item) => (
                  <li key={item.id}>{item.name}</li> // Render each item
                ))}
              </ul>
            </div>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    </>
  );
}
