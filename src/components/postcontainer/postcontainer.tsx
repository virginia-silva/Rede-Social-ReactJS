import React from "react";
import Form from './form/form'
import Posts from "./posts/posts";

const PostContainer = () => {

  return (
    <div className="post-container">
      <Form />
      <Posts />
    </div>
  )
}

export default PostContainer