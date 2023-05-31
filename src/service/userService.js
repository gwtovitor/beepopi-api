import User from "../model/User.js";

export const findAllUser = () => User.find();

export const createUser = (user) => User.create(user);

export const findUserByEmail = (email) => User.findOne({ email: email }).select("+password");

export const findUserByUsername = (username) => User.findOne({ username: username }).select("+password");

export const findUserById = (id) => User.findById(id);

export const updateUser = (id, user) => User.findOneAndUpdate(id, user);

export const deleteUser = (id) => User.findOneAndDelete(id);