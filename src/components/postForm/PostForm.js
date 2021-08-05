import React, { useState } from "react"
import GiphySearch from "../giphySearch/GiphySearch"

const PostForm=({visibility})=>{
    const[gif,setGif]=useState(false)

    const gifClickHandler=()=>{
        gif?setGif(false):setGif(true)
    }


    return(
        <div className={visibility?"postForm":"none"}>
            <div className="postInput"> <input  placeholder="Hello World"/></div>
            <div className="gif-add"></div>
            {gif && <GiphySearch/>}
            
           
            <div className="buttons">
                <button onClick={gifClickHandler}>GIF</button>
                <button>Post</button>

            </div>

        </div>
    )
}

export default PostForm;