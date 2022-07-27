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
      if (!user) throw new Error("User not found");
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
  async create(req, res) {
    const { id, name, birthDate } = req.body;
    const user = { id, name, birthDate };

    try {
      const newUser = await this.userService.createUser(user);
      res.status(201).json(newUser);
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
