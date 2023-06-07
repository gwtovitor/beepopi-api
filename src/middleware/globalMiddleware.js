import { findUserById, findUserByUsername, findUserByEmail, findUserByCpf } from "../service/userService.js";

const verifyUserToSave = async (req, res, next) => {
  try {

    const { email, username, password, cpf } = req.body;

    console.log(cpf)

    if (!email || !username || !password) return res.status(400).send({ message: "Todos os campos devem ser preenchidos" });

    if (await findUserByEmail(email)) return res.status(400).send({ message: "Email já está sendo usado." });

    if (await findUserByUsername(username)) return res.status(400).send({ message: "Usuário já está sendo usado." });

    if (cpf != '' && await findUserByCpf(cpf)) return res.status(400).send({ message: "CPF já cadastrado." });

    next();
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

const verifyUserToLogin = (req, res, next) => {
  try {
    const { login, password } = req.body;

    (!login || !password) ? res.status(400).send({ message: "Todos os campos devem ser preenchidos" }) : next();
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

const verifyUserId = (req, res, next) => {
  try {
    const { id } = req.params;

    const user = findUserById(id);

    if (!user) return res.status(404).send({ message: "Usuário nao encontrado" });

    req.id = id;

    next();
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export default {
  verifyUserToSave,
  verifyUserToLogin,
  verifyUserId
};