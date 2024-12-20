// File: routers/postRouter.js
// This file defines the routes for managing posts.
// It resides in the 'routers' folder.

import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const postRouter = Router();

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               userId:
 *                 type: integer
 *               author:
 *                 type: string
 *               cover:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created post
 */
postRouter.post("/", createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve all posts
 *     responses:
 *       200:
 *         description: A list of posts
 */
postRouter.get("/", getPosts);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retrieve a single post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the post to retrieve
 *     responses:
 *       200:
 *         description: The post information
 */
postRouter.get("/:id", getPostById);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               userId:
 *                 type: integer
 *               author:
 *                 type: string
 *               cover:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated post
 */
postRouter.put("/:id", updatePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the post to delete
 *     responses:
 *       200:
 *         description: A message confirming the post was deleted
 */
postRouter.delete("/:id", deletePost);

export default postRouter;
