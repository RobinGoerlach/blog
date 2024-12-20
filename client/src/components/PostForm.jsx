const PostForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input name="title" className="input input-bordered w-full" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          name="content"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PostForm;
