class UserService {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async getUser(id) {
    try {
      const user = await this.userRepository.getUser(id);
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getUsers() {
    const users = await this.userRepository.getUsers();
    return users;
  }
  async createUser(user) {
    try {
      const alreadyExist = await this.userRepository.alreadyExist(user.id);
      if (alreadyExist) throw new Error("User already exist");
      const newUser = await this.userRepository.createUser(user);
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateUser(user) {
    try {
      const _user = await this.userRepository.alreadyExist(user.id);
      if (!_user) throw new Error("User does not exist");
      return await this.userRepository.updateUser(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteUser(id) {
    try {
      const alreadyExist = await this.userRepository.alreadyExist(id);
      if (!alreadyExist) throw new Error("User does not exist");
      return await this.userRepository.deleteUser(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
