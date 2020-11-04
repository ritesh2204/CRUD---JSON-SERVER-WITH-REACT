import React from "react";
import { NavLink } from "react-router-dom";

const UserListItem = ({ i, user, handleDelete }) => {
  return (
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>
        <NavLink to={`user/view/${user.id}`}>
          <button className="btn btn-primary text- mr-2">View</button>
        </NavLink>
        <NavLink to={`user/edit/${user.id}`}>
          <button className="btn btn-success text-white mr-2">Edit</button>
        </NavLink>

        <button
          className="btn btn-danger text-white mr-2"
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserListItem;
