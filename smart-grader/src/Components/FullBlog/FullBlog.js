import React from "react";
import { useParams } from "react-router-dom";

import { GoDash } from "react-icons/go";
import DOMPurify from "dompurify";

import posts from "../Blog/Posts";
import "./FullBlog.css";

const FullBlog = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  const sanitizedDescription = DOMPurify.sanitize(post.description);

  return (
    <div className="container-fluid fullBlog-second">
      <div className="row">
        <div className="col-md-8 fullBlog">
          <div className="fullBlogTitle">
            <h3>{post.title}</h3>
            <p>
              <span> {post.date}</span> <GoDash /> | <span> BLOG</span>
            </p>

            <div className="img-container">
              <img src={post.image} alt="blog-image" />
            </div>
          </div>

          <div
            className="fullBlogDescription"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default FullBlog;
