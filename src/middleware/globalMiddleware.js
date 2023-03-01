const userVerifyToSave = (req, res, next) => {

  try {
    const { email, username, password } = req.body;

    (!email || !username || !password) ? res.status(400).send({ message: "Todos os campos devem ser preenchidos" }) : next();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const userVerifyToLogin = (req, res, next) => {

  try {
    const { login, password } = req.body;

    (!login || !password) ? res.status(400).send({ message: "Todos os campos devem ser preenchidos" }) : next();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

export default {
  userVerifyToSave,
  userVerifyToLogin
};