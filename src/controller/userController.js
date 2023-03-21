import userService from "../service/userService.js";

export async function findAllUser(req, res) {
  try {
    const users = await userService.findAll();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

export function createUser(req, res) {
  try {
    const user = userService.create(req.body);

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};