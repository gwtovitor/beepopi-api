import express from "express";

import { create, del, findAll, findById, findByUsername, update } from '../controller/userController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import globalMiddleware from "../middleware/globalMiddleware.js";

export const userRoutes = express.Router();

userRoutes.get("/", findAll);
userRoutes.get("/:id", findById);
userRoutes.get("/username/:username", findByUsername);
userRoutes.post("/", globalMiddleware.verifyUserToSave, authMiddleware.encryptPassword, create);
userRoutes.patch("/:id", globalMiddleware.verifyUserId, update);
userRoutes.delete("/:id", del);