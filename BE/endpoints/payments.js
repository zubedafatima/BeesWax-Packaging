const express = require("express");
const PaymentsController = require("../controller/paymentsController");
const PaymentsService = require("../services/paymentsService");

const paymentsService = new PaymentsService();
const paymentsController = new PaymentsController(paymentsService);

const router = express.Router();

router.post("/payments-create", paymentsController.createPayment.bind(paymentsController));
router.get("/payments-retrieve", paymentsController.getPayments.bind(paymentsController));
router.get("/payments/:id", paymentsController.getPayment.bind(paymentsController));
router.put("/payments/:id", paymentsController.updatePayment.bind(paymentsController));
router.delete("/payments/:id", paymentsController.deletePayment.bind(paymentsController));

module.exports = router;
