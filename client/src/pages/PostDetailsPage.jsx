import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../api";

const PostDetailsPage = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPostById(id)
      .then(setPost)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default PostDetailsPage;
