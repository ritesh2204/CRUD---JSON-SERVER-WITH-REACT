import React, {useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from "axios"

const EditPost = () => {

const {id} = useParams();

const history = useHistory()

const [post, setPost] = useState({
    title: "",
    body: "",
    url: "",
    
})

useEffect(() => {
loadUsers()
},[])

async function loadUsers(){
    const result = await axios.get(`http://localhost:5000/posts/${id}`)
    setPost(result.data)
    console.log(result)
}


const handleChange = (e) => {
    setPost({
        ...post,
        [e.target.name]: e.target.value
    })
};

const handleSubmit = async (e) => {
e.preventDefault()
const result = await axios.put(`http://localhost:5000/posts/${id}`, post)
setPost(result.data)
alert("data Updated")
history.push('/')
}

const {title, body,url } = post;
    return (
 <div className="container">
  <form className="mt-3" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Title</label>
      <input type="text" name="title" value={title} className="form-control" onChange={handleChange} placeholder="Enter post title" defaultValue={title} />
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea type="text" name="body" value={body} onChange={handleChange} className="form-control"  rows={8}  placeholder="Enter post description" defaultValue={body} />
    </div>
    <div className="form-group">
    <label>Enter Image Url</label>
    <input type="url" name="url" value={url} onChange={handleChange}  className="form-control-file" defaultValue={url} />
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

export default EditPost
