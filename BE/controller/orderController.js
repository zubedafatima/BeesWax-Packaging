class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  async createOrder(req, res) {
    try {
      const orderData = req.body;
      const order = await this.orderService.createOrder(orderData);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await this.orderService.getOrders();
      res.json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOrder(req, res) {
    try {
      const orderId = req.params.id;
      const order = await this.orderService.getOrder(orderId);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const orderId = req.params.id;
      const updates = req.body;
      const order = await this.orderService.updateOrder(orderId, updates);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      const orderId = req.params.id;
      await this.orderService.deleteOrder(orderId);
      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = OrderController;
