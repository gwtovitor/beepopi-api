import express from "express";

import { create, del, findAll, update } from '../controller/userController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import globalMiddleware from "../middleware/globalMiddleware.js";

export const userRoutes = express.Router();

userRoutes.get("/", findAll);
userRoutes.post("/", authMiddleware.encryptPassword, create);
userRoutes.patch("/:id", update);
userRoutes.delete("/:id", del);