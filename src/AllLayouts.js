import React from "react";
import HomeLayouts from "./components/layouts/HomeLayouts/HomeLayouts";
import AddUser from "./pages/AddUser";
import EditUserPage from "./pages/EditUserPage";
import UsersList from "./pages/UsersList";
import ViewUser from "./pages/ViewUser";

export const Home = () => (
  <HomeLayouts>
    <UsersList />
  </HomeLayouts>
);

export const AddUserForm = () => (
  <HomeLayouts>
    <AddUser />
  </HomeLayouts>
);

export const EditUser = () => (
  <HomeLayouts>
    <EditUserPage />
  </HomeLayouts>
);

export const ViewUserPage = () => (
  <HomeLayouts>
    <ViewUser />
  </HomeLayouts>
);
