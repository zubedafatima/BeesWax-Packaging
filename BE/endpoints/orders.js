const express = require("express");
const OrderController = require("../controller/orderController");
const OrderService = require("../services/orderService");

const orderService = new OrderService();
const orderController = new OrderController(orderService);

const router = express.Router();

router.post("/orders", orderController.createOrder.bind(orderController));
router.get("/orders", orderController.getOrders.bind(orderController));
router.get("/orders/:id", orderController.getOrder.bind(orderController));
router.put("/orders/:id", orderController.updateOrder.bind(orderController));
router.delete("/orders/:id", orderController.deleteOrder.bind(orderController));

module.exports = router;
