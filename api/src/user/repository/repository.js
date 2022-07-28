const userRecordModel = require("./models/User.model");
const mongoose = require("mongoose");

class UserRepository {
  async saveRecord(data) {
    const record = new userRecordModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    const save = record.save();
    return save;
  }
  async findByEmail(email) {
    return userRecordModel.findOne({ email });
  }

  async findByID(user_id) {
    return userRecordModel.find({ id: user_id });
  }

  async findAll() {
    return userRecordModel.find();
  }
  async deleteOneUser(id) {
    return await userRecordModel.deleteOne({ id: id });
  }
  async editOneUser(user_id, name, email, hashPassword, role) {
    return await userRecordModel.findOneAndUpdate(
      {
        id: user_id,
      },
      {
        name,
        password: hashPassword,
        email,
        role,
      },
      { new: true }
    );
  }
}

module.exports = UserRepository;
