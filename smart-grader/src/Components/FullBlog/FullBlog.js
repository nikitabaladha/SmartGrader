import React from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import posts from "../Blog/Posts";

const FullBlog = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  const sanitizedDescription = DOMPurify.sanitize(post.description);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </div>
  );
};

export default FullBlog;
