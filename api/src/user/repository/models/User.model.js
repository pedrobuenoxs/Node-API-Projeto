const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserRecordSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userRecordModel", UserRecordSchema);
