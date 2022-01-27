import React from "react";

const CreatePost = ({ postClickHandler }) => {
  return (
    <div className="createPost">
      <div onClick={postClickHandler} className="compose-post">
        <p>Compose Post</p>
      </div>
      <div className="cros" onClick={postClickHandler}>
        x
      </div>
    </div>
  );
};

export default CreatePost;
