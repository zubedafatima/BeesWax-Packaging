class PaymentsController {
    constructor(paymentsService) {
      this.paymentsService = paymentsService;
    }
  
    async createPayment(req, res) {
      try {
        const paymentData = req.body;
        const payment = await this.paymentsService.createPayment(paymentData);
        res.status(201).json(payment);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getPayments(req, res) {
      try {
        const payments = await this.paymentsService.getPayments();
        res.json(payments);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getPayment(req, res) {
      try {
        const paymentId = req.params.id;
        const payment = await this.paymentsService.getPayment(paymentId);
        if (!payment) {
          return res.status(404).json({ error: "Payment not found" });
        }
        res.json(payment);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async updatePayment(req, res) {
      try {
        const paymentId = req.params.id;
        const updates = req.body;
        const payment = await this.paymentsService.updatePayment(paymentId, updates);
        if (!payment) {
          return res.status(404).json({ error: "Payment not found" });
        }
        res.json(payment);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deletePayment(req, res) {
      try {
        const paymentId = req.params.id;
        await this.paymentsService.deletePayment(paymentId);
        res.json({ message: "Payment deleted successfully" });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = PaymentsController;
  