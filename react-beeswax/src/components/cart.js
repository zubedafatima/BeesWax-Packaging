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
  }, []);

  const handleRemoveItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    alert("Item removed!");
  };
  const calculateTotal = (items) => {
    return items
      .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0)
      .toFixed(2);
  };

  const checkout = () => {
    setItems([]);
    alert("Thank you for shopping!");
  };
  return (
    <>
      <div className="cart-container">
        <div className="division">
          <div className="left-container">
            <div className="top-div">
              <div className="left-head">
                <h2 style={{ fontsize: "xx-large" }}>Shopping cart</h2>
              </div>
              <div className="right-head">
                <h5>Items</h5>
              </div>
            </div>
            <div className="bottom-div">
              {items.map((item) => (
                <div className="item">
                  <div className="img">
                    <img src={item.imageUrl} alt="image"></img>
                  </div>
                  <div className="details">
                    <div className="item-name">
                      <ul className="itemname">
                        <li className="list" style={{ color: "grey" }}>
                          {item.name}
                        </li>
                      </ul>
                    </div>
                    <div className="incrementer">
                      <a href="/cart">-</a>
                      <a href="/cart" class="border">
                        1
                      </a>
                      <a href="/cart">+</a>
                    </div>
                    <div className="price">
                      {item.price}{" "}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="close"
                      >
                        &#10005;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-container">
            <div className="top-div">
              <h2 style={{ borderbottom: "solid 2px rgb(14, 13, 13)" }}>
                Summary
              </h2>
            </div>
            <div class="right-bottom-div">
              {items.map((item) => (
                <div className="summary-item" key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <div className="summary-total">
                <span>Total:</span>
                <span>${calculateTotal(items)}</span>
              </div>
              <button className="checkout-button" onClick={() => checkout()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
