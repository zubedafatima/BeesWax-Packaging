import { useEffect, useState } from "react";

export function Orderss() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/orders-retrieve");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <h2>Order {order.OrderID}</h2>
              <p>Total: {order.Total}</p>
              <p>Address: {order.UserAddress}</p>
              <p>Contact: {order.Contact}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>{item.name} - {item.price}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
