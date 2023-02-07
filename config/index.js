const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/crudd-ex");
    console.log("Thành Công");
  } catch (error) {}
};
module.exports = { connect };