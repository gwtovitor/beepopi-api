import User from "../model/User.js";

const findAll = () => User.find();

const create = (user) => User.create(user);

const findByUsername = (username) => User.findOne({ username: username }).select("+password");

export default {
  findAll,
  create,
  findByUsername
};