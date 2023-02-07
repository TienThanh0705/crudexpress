const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const users = new Schema(
  {
    name: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const ModelUser = mongoose.model("users", users);

module.exports = ModelUser;
