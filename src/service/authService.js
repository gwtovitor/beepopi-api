import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const tokenGen = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: "24h" });
};

export default {
  tokenGen
}