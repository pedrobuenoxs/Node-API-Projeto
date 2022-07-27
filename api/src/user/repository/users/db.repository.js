const { dataUser } = require("./user");

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

  async updateUser(id, user) {
    const result = await this.db
      .collection("users")
      .updateOne({ _id: id }, { $set: user });
    return result.modifiedCount;
  }

  async deleteUser(id) {
    const result = await this.db.collection("users").deleteOne({ _id: id });
    return result.deletedCount;
  }
}

module.exports = UserRepository;
