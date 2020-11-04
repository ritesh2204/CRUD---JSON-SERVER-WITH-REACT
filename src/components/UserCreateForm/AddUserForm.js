import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddUserForm = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:5000/users", user);
    console.log(result);
    history.push("/");
  };

  const { name, email, phone, website } = user;
  console.log(user);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
            type="number"
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

export default AddUserForm;
