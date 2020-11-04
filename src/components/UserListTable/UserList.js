import React from "react";
import UserListItem from "./UserListItem";

const UserList = ({ users, handleDelete }) => {
  return (
    <div className="container p-5">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name </th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Website</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <UserListItem user={user} i={i} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
