const Payment = require("../models/payments");

class PaymentsService {
  async createPayment(paymentData) {
    try {
      const payment = new Payment(paymentData);
      return await payment.save();
    } catch (error) {
      throw new Error("Failed to create payment");
    }
  }

  async getPayments() {
    try {
      return await Payment.find();
    } catch (error) {
      throw new Error("Failed to fetch payments");
    }
  }

  async getPayment(paymentId) {
    try {
      return await Payment.findById(paymentId);
    } catch (error) {
      throw new Error("Failed to fetch payment");
    }
  }

  async updatePayment(paymentId, updates) {
    try {
      return await Payment.findByIdAndUpdate(paymentId, updates, { new: true });
    } catch (error) {
      throw new Error("Failed to update payment");
    }
  }

  async deletePayment(paymentId) {
    try {
      await Payment.findByIdAndDelete(paymentId);
    } catch (error) {
      throw new Error("Failed to delete payment");
    }
  }
}

module.exports = PaymentsService;
