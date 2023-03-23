import express from "express";
import cors from "cors";

import db from "./src/database/db.js";

import { userRoutes } from "./src/routes/userRoutes.js";
import authRoutes from './src/routes/authRoutes.js';
import { profileRoutes } from './src/routes/profileRoutes.js';
import { postRoutes } from './src/routes/postRoutes.js';
import { walletRoutes } from './src/routes/walletRoutes.js';

const app = express();

db.connectDatabase();

app.use(cors("*"));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/login", authRoutes.router);
app.use("/profile", profileRoutes);
app.use("/post", postRoutes);
app.use("/wallet", walletRoutes);

app.listen(3333, () => console.log("online port 3333"));