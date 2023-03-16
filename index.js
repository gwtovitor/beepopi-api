import express from "express";
import cors from "cors";

import db from "./src/database/db.js";

import { userRoutes } from "./src/routes/userRoutes.js";
import authRoutes from './src/routes/authRoutes.js';
import { criadorRoutes } from './src/routes/criadorRoutes.js';

const app = express();

db.connectDatabase();

app.use(cors("*"));
app.use(express.json());
app.use("/user", userRoutes);
app.use("/login", authRoutes.router);
app.use("/criador", criadorRoutes)

app.listen(3333, () => console.log("online port 3333"));