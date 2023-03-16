import express from "express";

import { findAll } from '../controller/criadorController.js';

export const criadorRoutes = express.Router();

criadorRoutes.get("/", findAll);