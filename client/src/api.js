const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch all posts
export const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};

// Create a new post
export const createPost = async (post) => {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Failed to create post");
  }
  return await response.json();
};

// Fetch a post by ID
export const fetchPostById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return await response.json();
};

// Update a post by ID
export const updatePost = async (id, post) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Failed to update post");
  }
  return await response.json();
};

// Delete a post by ID
export const deletePost = async (id) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
  return await response.json();
};
