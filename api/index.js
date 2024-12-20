// File: index.js
// This file is the main entry point for the application.
// It sets up the Express server and connects the routes.

import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ALIVE!");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
