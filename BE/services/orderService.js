const Order = require("../models/orders");

class OrderService {
  async createOrder(orderData) {
    console.log("entereded create order end");
    try {
      const order = new Order(orderData);
      return await order.save();
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create order");
    }
  }

  async getOrders() {
    console.log("entereded get order end");
    try {
      return await Order.find();
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch orders");
    }
  }

  async getOrder(orderId) {
    console.log("entereded get by id order end");
    try {
      return await Order.findById(orderId);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch order");
    }
  }

  async updateOrder(orderId, updates) {
    console.log("entereded update order end");
    try {
      return await Order.findByIdAndUpdate(orderId, updates, { new: true });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to update order");
    }
  }

  async deleteOrder(orderId) {
    console.log("entereded delete order end");
    try {
      await Order.findByIdAndDelete(orderId);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete order");
    }
  }
}

module.exports = OrderService;
