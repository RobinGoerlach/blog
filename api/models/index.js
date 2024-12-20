// File: models/index.js
// This file initializes the database connection and defines relationships between models.
// It resides in the 'models' folder.

import sequelize from "../db/index.js";
import User from "./User.js";
import Post from "./Post.js";

// Define relationships
User.hasMany(Post, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

// Synchronize models with the database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.error("Error creating database:", err));

export { sequelize, User, Post };
