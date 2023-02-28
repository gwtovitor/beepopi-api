import User from "../model/User.js";

const findAll = () => User.find();

export default {
  findAll
};