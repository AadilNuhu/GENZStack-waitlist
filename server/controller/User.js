const User = require("../models/Users");

const getAllUsers = async (req, res) => {
  const user = await User.find();
  return res.status(200).json(user);
};
const getUser = async (req, res) => {
  const userID = req.params.id;
  const user = await User.findById(userID);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
    return res.status(201).json(user);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "all fields required. " });
  }

  try {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(404).json({ message: "Use a different Email" });
    }

    const user = new User({
      name,
      email,
    });

    await user.save()

    return res.status(201).json({ message: "Details added successfully", details: user });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;
  return res.send("Update user with id " + id);
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  return res.send("Delete user with id " + id);
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
