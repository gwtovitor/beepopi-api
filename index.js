import express from "express";

const app = express();

app.get("/", (req, res) => res.send("hello Beepopi"));

app.listen(3333, () => console.log("online port 3333"));