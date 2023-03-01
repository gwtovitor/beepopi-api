import express from "express";

import userController from '../controller/userController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import globalMiddleware from "../middleware/globalMiddleware.js";

const router = express.Router();

router.get("/", userController.findAll);
router.post("/", globalMiddleware.userVerifyToSave, authMiddleware.encryptPassword, userController.create);

export default { router };