const User = require("../models/user.models");

const createUser = async (req, res) => {
  const data = req.body;
  const user = await User.create(data);
};
const getAllUser = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
module.exports = { createUser, getAllUser };
