import React from "react";
import HomeLayouts from "./components/layouts/HomeLayouts/HomeLayouts";
import AddUser from "./pages/AddUser";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import PostListPage from "./pages/PostListPage";
import ViewUser from "./pages/ViewUser";

export const Home = () => (
  <HomeLayouts>
    <PostListPage/>
  </HomeLayouts>
);

export const AddUserForm = () => (
  <HomeLayouts>
    <AddUser />
  </HomeLayouts>
);

export const EditPost = () => (
  <HomeLayouts>
      <EditPostPage/>
  </HomeLayouts>
);

export const ViewUserPage = () => (
  <HomeLayouts>
    <ViewUser />
  </HomeLayouts>
);

export const CreatePost = () => (
  <HomeLayouts>
    <CreatePostPage/>
  </HomeLayouts>
)