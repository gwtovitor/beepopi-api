import { findAllUser, createUser, updateUser, deleteUser, findUserById } from "../service/userService.js";

export const findAll = async (req, res) => {
  try {
    const users = await findAllUser();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

export const findById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await findUserById(id);

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

export const findByUsername = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await findUserByUsername(username);

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const create = async (req, res) => {
  try {
    const user = await createUser(req.body);

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params.id;

    const user = await updateUser(id, req.body);

    res.status(200).send({ message: 'User has been updated.' });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const del = async (req, res) => {
  try {
    const { id } = req.params.id;

    const user = await deleteUser(id);

    res.status(200).send({ message: 'User has been deleted.' });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}