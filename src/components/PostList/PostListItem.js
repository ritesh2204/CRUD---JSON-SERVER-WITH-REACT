import React from "react";
import { Link,useParams } from "react-router-dom";

const PostListItem = ({ i,post, handleDelete}) => {
  return (
    <div className="p-2 text-dark">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img className="img-fluid" src={post.url} alt="post-thumbnail" style={{width: 100}}/>
        </div>
        <div  className="pointer">
        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="trash-outline" size="large" ></ion-icon>
        </button>
        </div>
      </div>
    <Link to={`/post/edit/${post.id}`}><h5>{post.title}</h5></Link>
    <p>{post.body.slice(0,100) + "..."}</p>
    <p className="text-secondary"><strong>Created at: </strong>{post.date}</p>

      {/* Modal */}

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">Are you sure you want to delete ?</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
     
          <div className="modal-footer text-center">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" onClick={() => handleDelete(post.id)} className="btn btn-danger" data-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>

{/* Modal end  */}
    </div>
  
  );
};

export default PostListItem;
