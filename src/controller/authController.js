import authService from '../service/authService.js';

const login = (req, res) => {
  try {
    const token = authService.tokenGen(req.user.id);

    res.status(200).send({ token: token });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

export default {
  login
};