import React from "react"

const CreatePost=({postClickHandler})=>{

    return(
        <div className="createPost">
            <div onClick={postClickHandler}>Compose Post</div>
            <div>x</div>


        </div>
    )
}

export default CreatePost;