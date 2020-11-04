import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const EditUserForm = () => {
  const { id } = useParams();
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUsers();
  },[]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    console.log(result.data);
    setUser(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, user);
    history.push("/");
  };

  const { name, email, phone, website } = user;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Edit user</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mobile</label>
          <input
            type="numeric"
            name="phone"
            value={phone}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Add website</label>
          <input
            type="text"
            name="website"
            value={website}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
