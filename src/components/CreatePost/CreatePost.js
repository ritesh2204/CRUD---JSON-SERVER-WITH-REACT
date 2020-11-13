import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import moment from "moment";

const CreatePost = () => {
const [post, setPost] = useState({
    title: "",
    body: "",
    url: "",
    date: moment().format('MMMM Do YYYY, h:mm:ss a')
    
})

const handleChange = (e) => {
    setPost({
        ...post,
        [e.target.name]: e.target.value
    })
};

const handleSubmit = async (e) => {
e.preventDefault()

const result = await axios.post("http://localhost:5000/posts", post )
console.log(result)
alert("data submitted")
}

const {title, body,url } = post;
    return (
 <div className="container">
  <form className="mt-3" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Title</label>
      <input type="text" name="title" value={title} className="form-control" onChange={handleChange} placeholder="Enter post title" />
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea type="text" name="body" value={body} onChange={handleChange} className="form-control"  rows={8}  placeholder="Enter post description" />
    </div>
    <div className="form-group">
    <label>Enter Image Url</label>
    <input type="url" name="url" value={url} onChange={handleChange}  className="form-control-file"  />
    </div>
    <div className="text-center">
    <button type="submit" className="btn btn-success btn-lg mr-2">Submit</button>
       <Link to="/">
        <button className="btn btn-danger btn-lg">Back</button>
        </Link>
    </div>
  </form>
</div>
    )
}

export default CreatePost
