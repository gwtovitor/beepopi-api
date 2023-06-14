import dotenv from "dotenv";

import express from "express";
import cors from "cors";

import db from "./src/database/db.js";

import { userRoutes } from "./src/routes/userRoutes.js";
import authRoutes from './src/routes/authRoutes.js';
import { profileRoutes } from './src/routes/profileRoutes.js';
import { postRoutes } from './src/routes/postRoutes.js';
import { walletRoutes } from './src/routes/walletRoutes.js';
import { uploadRoutes } from './src/routes/uploadRoutes.js';
import { feedRoutes } from './src/routes/feedRoutes.js';
import { vertRoutes } from './src/routes/vertRoutes.js';

const app = express();

db.connectDatabase();
dotenv.config();
app.use(cors("*"));
app.use(express.json({ limit: "10mb", extended: true }));

app.use("/user", userRoutes);
app.use("/login", authRoutes.router);
app.use("/profile", profileRoutes);
app.use("/feed", feedRoutes);
app.use("/post", postRoutes);
app.use("/vert", vertRoutes);
app.use("/upload", uploadRoutes);
app.use("/wallet", walletRoutes);

app.listen(3333, () => console.log('online port 3333'));
