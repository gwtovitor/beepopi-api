import express from "express";

import authController from '../controller/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/", authMiddleware.verifyLogin, authController.login);

export default { router };