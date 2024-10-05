import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Blog.css";
import posts from "./Posts";

import { IoIosVideocam } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container-fluid blog-page-first">
          <h2>Our Blog</h2>
          <p>
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        <div className="container-fluid blog-page-second">
          <div className="row">
            {posts.map((post, index) => (
              <div className="col-md-6" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-subtitle">
                      <IoIosVideocam /> Tutorial {post.date}
                    </h6>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <img src={post.image} className="" alt={post.title} />
                    <p>{post.author}</p>
                    <Link href={post.link}>
                      Read more <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
