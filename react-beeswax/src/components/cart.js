import { useEffect, useState } from "react";
import "../styles/cartStyle.css";
import { useLocation } from "react-router-dom";

const listDummy = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    imageUrl: "./images/bees.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    imageUrl: "./images/bees.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$15",
    imageUrl: "./images/bees.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

export function Cart({ prop }) {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const cartItems = location.state?.cartItems;
  // useEffect(() => {
  //   setItems(prop); // Set items directly from prop
  //   console.log(prop);
  // }, [prop]);

  useEffect(() => {
    if (cartItems) {
      setItems(cartItems);
    } else {
      setItems(listDummy);
    }
  }, [cartItems]);
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
