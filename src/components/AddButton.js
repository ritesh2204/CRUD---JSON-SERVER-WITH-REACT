import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => {
    return (
       <>  
     <div className="d-flex  justify-content-between align-items-center">
     <div>
        <h1 >Your posts</h1>
     </div>
     <div>
       <Link to="/create-post">
        <button className="btn btn-primary">New Post</button>
        </Link>
     </div>
   </div>
   <hr/>
   </>
    )
}

export default AddButton
