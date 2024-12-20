/* File: index.js
 * Description: Main entry point for the application
 * Location: root folder
 */

import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check route with current time
app.get("/", (req, res) => {
  const currentTime = new Date().toISOString();
  res.send(`ALIVE!<br/> Current time: ${currentTime}`);
});

// API documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use("/users", userRouter);
app.use("/posts", postRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
