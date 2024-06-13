class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async createUser(req, res) {
      try {
        const userData = req.body;
        const user = await this.userService.createUser(userData);
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = UserController;
  