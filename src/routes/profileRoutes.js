import express from "express";

import { findAll } from '../controller/profileController.js';

export const profileRoutes = express.Router();

profileRoutes.get("/", findAll);