import React, { useState } from "react"
import GiphySearch from "../giphySearch/GiphySearch"

const PostForm=({visibility,inputHandler,postData,addPost,gifClickHandler,currentgif})=>{

    const[gif,setGif]=useState(false)
    




    const gifClickHandlerv=()=>{
        gif?setGif(false):setGif(true)
        
    }


    return(
        <div className={visibility?"postForm":"none"}>
            <div className="postInput"> <input  placeholder="Hello World" onChange={inputHandler} value={postData.post} name="post"/></div>
            <div className="gif-add"><img src={currentgif}/></div>
            {gif && <GiphySearch  gifClickHandler={ gifClickHandler} />}
            
           
            <div className="buttons">
                <button onClick={gifClickHandlerv} className="gif-btn">GIF</button>
                <button onClick={addPost} className="post-btn">Post</button>

            </div>

        </div>
    )
}

export default PostForm;