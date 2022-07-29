module.exports = class RegisterUserController {
  constructor(userService) {
    this.userService = userService;
  }

  async register(req, res) {
    try {
      const user = await this.userService.register(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
