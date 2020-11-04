import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserList from "../components/UserListTable/UserList";

const UsersList = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setUsers(result.data.reverse());
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    loadUsers();
  };

  return <UserList users={users} handleDelete={handleDelete} />;
};

export default UsersList;
