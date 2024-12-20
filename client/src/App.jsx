import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreate = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route
          path="/create"
          element={<CreatePostPage onPostCreate={handlePostCreate} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
