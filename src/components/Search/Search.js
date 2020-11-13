import React, { useState } from 'react'
import axios from "axios";

const Search = () => {

    const [search, setSearch] = useState({
        searchQuery: null
    })

    const handleChange =  (e) => {
        //    setSearch({
        //        ...search,
        //        [e.target.name]: e.target.value
        //    })
        //    console.log(e)
        
      
      try{
       const result = axios.get("http://localhost:5000/posts?q="+ e.target.value)
        console.log(result)
      }
      catch(error){
            console.log(error)
      }
    };


//     axios.get("http://localhost:5000/posts?q="+ key ).then((data)=>{
//         data.json().then((resp)=>{
//         console.log(resp)
// })

//         })

const {searchQuery} = search 

    return (
  
    )
}

export default Search
