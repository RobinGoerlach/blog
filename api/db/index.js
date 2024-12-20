// File: db/index.js
// This file sets up and exports the Sequelize instance for database connection.
// It resides in the 'db' folder.

import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

// Create a new Sequelize instance using environment variables
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // Specify the dialect explicitly (e.g., postgres, mysql, sqlite, etc.)
  logging: console.log, // Enable or disable SQL query logging
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for some hosted PostgreSQL services
    },
  },
});

export default sequelize;
