import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import "./Blog.css";
import posts from "./Posts";

import blogImage1 from "../../Images/blog-page-1.png";

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
                <div className="blog-card">
                  <h6>
                    <span className="d-flex justify-content-between align-items-center">
                      <span>
                        <span className="icon">
                          <IoIosVideocam />
                        </span>
                        <span className="sub-title">Tutorial </span>
                      </span>
                      <span className="date"> {post.date}</span>
                    </span>
                  </h6>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="d-flex justify-content-between align-items-center card-footer">
                    <div className="d-flex">
                      <div className="img-container">
                        <img src={blogImage1} alt="SmartGrader Team" />
                      </div>

                      <p>SmartGrader Team</p>
                    </div>
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
