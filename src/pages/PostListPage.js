/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";

import axios from "axios";
import PostList from "../components/PostList/PostList";
import AddButton from "../components/AddButton";

const PostListPage = () => {
 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:5000/posts");
    setPosts( result.data.reverse());
    setLoading(true)
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    loadPosts();
  };

  return (
          <React.Fragment>
            <div className="container  p-5">
               <AddButton/>
                <PostList posts={posts} loading={loading}  handleDelete={handleDelete}/>
            </div>
          </React.Fragment>
        )
}


export default PostListPage;
