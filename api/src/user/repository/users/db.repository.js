const { dataUser } = require("./user");

class UserRepository {
  async getUser(id) {
    const user = await dataUser.find((el) => el.id === Number(id));
    if (user === undefined) {
      throw new Error("User not found");
    }
    return user;
  }

  async getUsers() {
    const users = dataUser;
    return users;
  }

  async createUser(user) {
    const result = await this.db.collection("users").insertOne(user);
    return result.insertedId;
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
