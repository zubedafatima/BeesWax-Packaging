const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./endpoints/orders");

const app = express();

// Connect to MongoDB
const MONGO_DB =
  "mongodb+srv://WebAssignmentUser:626CJHDdi7CATyIp@cluster0.yqfkd0h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
connectDb = async () => {
  console.log("connecting to db");
  await mongoose.connect(MONGO_DB);
  console.log("connected");
};

// Middleware
app.use(express.json());

// Mount routes
app.use("/api", orderRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
