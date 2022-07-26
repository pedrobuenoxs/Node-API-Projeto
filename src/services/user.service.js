class UserService {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async getUser(id) {
    try {
      const user = await this.userRepository.getUser(id);
      return { ...user, message: "User found" };
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getUsers() {
    return await this.userRepository.getUsers();
  }
  async createUser(user) {
    return await this.userRepository.createUser(user);
  }
  async updateUser(user) {
    return await this.userRepository.updateUser(user);
  }
  async deleteUser(id) {
    return await this.userRepository.deleteUser(id);
  }
}

module.exports = UserService;
