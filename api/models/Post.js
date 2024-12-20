// File: models/Post.js
// This file defines the Sequelize model for the 'Post' table.
// It resides in the 'models' folder.

import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: false, // Set to true if the field is optional
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Post;
