import React, { useState } from "react";
import CreatePost from "../createpost/CreatePost";
import Post from "../post/Post";
import PostForm from "../postForm/PostForm";

const Home = () => {
  const [visibility, setvisibility] = useState(false);

  const [postData, setPostData] = useState({
    post: "",
    img: "",
  });
  const [data, setData] = useState([]);

  const inputHandler = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const [currentgif, setcurrentgif] = useState("");
  const gifClickHandler = (url) => {
    setPostData({ ...postData, img: url });
    setcurrentgif(url);
  };

  const addPost = () => {
    setData([...data, postData]);
    setvisibility(false);
    setcurrentgif("");
    setPostData({ post: "", img: "" });
  };

  console.log(postData);

  const postClickHandler = () => {
    visibility ? setvisibility(false) : setvisibility(true);
  };

  return (
    <div className="home">
      <div>
        <CreatePost postClickHandler={postClickHandler} />
      </div>
      <PostForm
        visibility={visibility}
        postData={postData}
        inputHandler={inputHandler}
        addPost={addPost}
        gifClickHandler={gifClickHandler}
        currentgif={currentgif}
      />
      {data && data.map((x) => <Post post={x.post} url={x.img} />)}
    </div>
  );
};

export default Home;
