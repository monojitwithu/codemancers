import React from "react";

const Post = ({ post, url }) => {
  return (
    <div className="post">
      <p>{post}</p>
      {url && <img src={url} alt="gif" />}
    </div>
  );
};

export default Post;
