import React, { useState } from "react"
import GiphySearch from "../giphySearch/GiphySearch"

const PostForm=({visibility,inputHandler,postData,addPost})=>{

    const[gif,setGif]=useState(false)
    




    const gifClickHandler=()=>{
        gif?setGif(false):setGif(true)
    }


    return(
        <div className={visibility?"postForm":"none"}>
            <div className="postInput"> <input  placeholder="Hello World" onChange={inputHandler} value={postData.post} name="post"/></div>
            <div className="gif-add"></div>
            {gif && <GiphySearch/>}
            
           
            <div className="buttons">
                <button onClick={gifClickHandler}>GIF</button>
                <button onClick={addPost}>Post</button>

            </div>

        </div>
    )
}

export default PostForm;