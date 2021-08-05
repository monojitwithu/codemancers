import React, { useState } from "react"
import CreatePost from "../createpost/CreatePost"
import PostForm from "../postForm/PostForm"

const Home=()=>{
    const[visibility,setvisibility]=useState(false)

    const[postData,setPostData]=useState({
        post:"",
        img:""
    })
    const [data,setData]=useState([])

    const inputHandler=(e)=>{
        setPostData({...postData,[e.target.name]:e.target.value})

        

    }
    const gitClickHandler=(url)=>{
        setPostData({...postData,img:url})


    }


    const addPost=()=>{
        setData([...data,postData])

    }



   console.log(postData)

    const postClickHandler=()=>{
        visibility?setvisibility(false):setvisibility(true)
    }


    return(
        <div className="home">
            <div>
            <CreatePost postClickHandler={postClickHandler}/>

            </div>
            <PostForm  visibility={visibility}  postData={postData} inputHandler={inputHandler} addPost={addPost}/>
            {
                data && data.map((x)=><img src={x.img}></img>)
            }
            
            

        </div>
    )
}

export default Home;