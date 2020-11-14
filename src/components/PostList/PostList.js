import React, {useState} from "react";
import PostListItem from "./PostListItem";
import Loader from 'react-loader-spinner'
// import Axios from "axios";


const PostList = ({ posts, loading, handleDelete}) => {
  const [search] = useState({
    searchQuery: null
  })

// const handleChange = (e) => {
//     e.preventDefault();
//     try{
//       fetch("http://localhost:5000/posts?q="+ e.target.value).then((data)=>{
//         console.log(data)
//         data.json()
//         .then((res)=>{
//           console.log(res)
//           setSearch({
//             searchQuery: res
//           })
//         })
//       })}
//     catch(error){
//     console.log(error)
// }}

const items = posts.map((post, i) => (
    <div className="border mb-3 shadow-sm" key={i}>
    <PostListItem post={post}  i={i} handleDelete={handleDelete} />
    </div>
))


// multiple ternery operator

// function checkSign(num) {
//   return (num === 0)?“zero”:(num < 0)?“negative”:“positive”;
//   }

// const lowercaseFilter = searchQuery.toLowerCase();
// const filterData = 


const {searchQuery} = search

  return (
     <>
       <div className="form-group">
            <input type="text" name="searchQuery" value={searchQuery} className="form-control"  onChange={()=>{}} placeholder="search ..." />
        </div>

         {loading ? items : <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          className="text-center"
          />
          } 

    {/* {searchQuery ? items : null} */}
  </>

  );
};

export default PostList;
