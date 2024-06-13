const User = require("../models/users");

class UserService {
  async createUser(userData) {
    console.log("Entered create user end");
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create user");
    }
  }

  async getUserByUsername(username) {
    console.log("Entered create user end");
    try {
      return await User.findOne({ username });
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }
}

module.exports = UserService;
