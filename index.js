import express from "express";

import db from "./src/database/db.js";

import userRoutes from "./src/routes/userRoutes.js";

db.connectDatabse();
const app = express();

app.use("/user", userRoutes.router);

app.listen(3333, () => console.log("online port 3333"));