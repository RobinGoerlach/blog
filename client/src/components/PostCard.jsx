const PostCard = ({ post }) => {
  return (
    <div className="card bg-white shadow-md p-4">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-sm">{post.content.substring(0, 100)}...</p>
      <button className="btn btn-primary mt-2">Read More</button>
    </div>
  );
};

export default PostCard;
