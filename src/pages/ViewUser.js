import React, { useState, useEffect } from "react";
import { useParams, } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });


  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    console.log(result.data);
    setUser(result.data);
  };

  
  useEffect(() => {
    loadUsers();
  }, []);

 

  const { name, email, phone, website } = user;
  return (
    <div className="container">
      <form>
        <h2 className="text-center">View User</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mobile</label>
          <input
            type="numeric"
            name="phone"
            value={phone}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Add website</label>
          <input
            type="text"
            name="website"
            value={website}
            className="form-control"
            id="exampleInputPassword1"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default ViewUser;
