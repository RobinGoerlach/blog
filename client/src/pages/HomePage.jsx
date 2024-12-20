import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch posts from the backend when the component is mounted
  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((err) => setError(err.message));
  }, []);

  // Handle errors
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Show a loading message if posts are not yet loaded
  if (!posts.length) {
    return <p>Loading posts...</p>;
  }

  // Render the list of posts
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white shadow-md mb-4 rounded">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
          <Link
            to={`/posts/${post.id}`}
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
