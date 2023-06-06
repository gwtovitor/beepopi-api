import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { findUserByUsername, findUserById, findUserByEmail } from '../service/userService.js';

dotenv.config();

const encryptPassword = (req, res, next) => {
  try {
    const password = req.body.password;

    req.body.password = bcrypt.hashSync(password, 10);

    next();
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

const verifyLogin = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    let user = {};

    const email = await findUserByEmail(login);

    const username = await findUserByUsername(login);

    if (!email && !username) {
      return res.status(404).send({ message: "Usuario ou Senha invalidos." });
    } else {
      !email ? user = username : user = email;
    }

    if (!bcrypt.compareSync(password, user.password)) return res.status(404).send({ message: "Usuario ou Senha invalidos." });

    req.user = user;

    next();
  } catch (err) {
    res.status(500).send({ message: err.toString() })
  }
};

const verifyToken = (req, res, next) => {
  try {
    const authorization = req.headers.authorization.split(" ");

    if (authorization.length < 2) res.status(401).send({ message: "Authorization invalido." });

    const [schema, token] = authorization;

    if (schema !== "Bearer") res.status(401).send({ message: "Authorization invalido." });

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      try {
        const user = await findUserById(decoded.id);

        !user ? res.status(401).send({ message: "Usuario nao encontrado." }) : req.user = user;

        next();
      } catch {
        res.status(401).send({ message: err.toString() });
      }
    });

  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

export default {
  encryptPassword,
  verifyLogin,
  verifyToken
};