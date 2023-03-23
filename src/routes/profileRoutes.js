import express from "express";

import { create, findAll, update, del } from '../controller/profileController.js';

export const profileRoutes = express.Router();

profileRoutes.get("/", findAll);
profileRoutes.post("/", create);
profileRoutes.patch("/:id", update);
profileRoutes.delete("/:id", del);