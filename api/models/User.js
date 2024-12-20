// File: models/User.js
// This file defines the Sequelize model for the 'User' table.
// It resides in the 'models' folder.

import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default User;