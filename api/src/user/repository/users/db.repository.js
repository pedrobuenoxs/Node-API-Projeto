let { dataUser } = require("./user");

class UserRepository {
  async getUser(id) {
    const user = await dataUser.find((el) => el.id === Number(id));
    if (user === undefined) {
      return false;
    }
    return user;
  }
  async alreadyExist(id) {
    const user = await dataUser.find((el) => el.id === Number(id));
    if (user === undefined) {
      return false;
    }
    return true;
  }

  async getUsers() {
    const users = dataUser;
    return users;
  }

  async createUser(user) {
    dataUser.push(user);
    return dataUser;
  }

  async updateUser(user) {
    const users = await dataUser.forEach((el) => {
      if (el.id === Number(user.id)) {
        el.name = user.name;
        el.birthDate = user.birthDate;
      }
    });
    dataUser = [];
    dataUser = users;
    return users;
  }

  async deleteUser(id) {
    const users = await dataUser.filter((el) => el.id !== Number(id));
    dataUser = [];
    dataUser = users;
    return users;
  }
}

module.exports = UserRepository;
