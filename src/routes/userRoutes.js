import express from "express";

import { createUser, findAllUser } from '../controller/userController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import globalMiddleware from "../middleware/globalMiddleware.js";

export const userRoutes = express.Router();

userRoutes.get("/", findAllUser);
userRoutes.post("/", createUser);