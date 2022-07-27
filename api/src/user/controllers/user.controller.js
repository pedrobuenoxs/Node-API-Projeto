class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async getAll(req, res) {
    try {
      const users = await this.userService.getUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
  async getById(req, res) {
    try {
      const user = await this.userService.getUser(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
  async create(req, res) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
  async update(req, res) {
    try {
      const user = await this.userService.updateUser(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
  async delete(req, res) {
    try {
      const user = await this.userService.deleteUser(req.query.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

module.exports = UserController;
