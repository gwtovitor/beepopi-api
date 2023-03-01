import User from "../model/User.js";

const findAll = () => User.find();

const create = (user) => User.create(user);

const findByUsername = (username) => User.findOne({ username: username }).select("+password");

const findById = (id) => User.findById(id);

export default {
  findAll,
  create,
  findByUsername,
  findById
};