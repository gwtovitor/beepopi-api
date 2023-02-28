import userService from "../service/userService.js";

const findAll = async (req, res) => {
  const users = await userService.findAll();

  res.status(200).send(users);
}

export default {
  findAll
}