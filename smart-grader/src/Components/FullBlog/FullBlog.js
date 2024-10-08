import React from "react";
import { useParams } from "react-router-dom";
import { GoDash } from "react-icons/go";
import DOMPurify from "dompurify";

import posts from "../Blog/Posts";
import "./FullBlog.css";

const FullBlog = () => {
  // Extracting the postId from the URL parameters
  const { postId } = useParams();

  // Retrieving the specific post based on postId
  const post = posts[postId];

  // If the post is not found, display a message
  if (!post) {
    return <h2>Post not found</h2>;
  }

  // Sanitizing the post description to prevent XSS attacks
  const sanitizedDescription = DOMPurify.sanitize(post.description);

  // Filtering out the current post to get recent posts
  const recentPosts = posts.filter((_, index) => index !== parseInt(postId));

  return (
    <div className="container-fluid fullBlog-second">
      <div className="row">
        {/* Main blog content section */}
        <div className="col-md-8 fullBlog">
          <div className="fullBlogTitle">
            <h3>{post.title}</h3>
            <p>
              <span>{post.date}</span> <GoDash /> | <span>BLOG</span>
            </p>
            {/* Displaying the main blog image */}
            <div className="img-container">
              <img src={post.image} alt="blog" />
            </div>
          </div>

          {/* Rendering the sanitized blog description */}
          <div
            className="fullBlogDescription"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        </div>

        {/* Recent posts section */}
        <div className="col-md-4 fullBlog-right">
          <h3>Recent Posts</h3>
          {recentPosts.length > 0 ? (
            // Mapping over the recent posts to display them
            recentPosts.map((recentPost, index) => (
              <div key={index} className="recent-post">
                <img src={recentPost.image} alt="recent-blog" />
                <h4>{recentPost.title}</h4>
              </div>
            ))
          ) : (
            // Message displayed if no recent posts are available
            <p>No recent posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
