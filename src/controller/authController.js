const login = (req, res) => {
  res.status(200).send(req.user);
}

export default {
  login
};