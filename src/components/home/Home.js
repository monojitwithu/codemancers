import React, { useState } from "react"
import CreatePost from "../createpost/CreatePost"
import PostForm from "../postForm/PostForm"

const Home=()=>{
    const[visibility,setvisibility]=useState(false)

    const postClickHandler=()=>{
        visibility?setvisibility(false):setvisibility(true)
    }
    

    return(
        <div className="home">
            <div>
            <CreatePost postClickHandler={postClickHandler}/>

            </div>
            <PostForm  visibility={visibility} />
            
            

        </div>
    )
}

export default Home;