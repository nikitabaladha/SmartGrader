import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Blog.css";
import posts from "./Posts";
import blogImage1 from "../../Images/blog-page-1.png";
import { IoIosVideocam } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

// Function to truncate the HTML description to a maximum of 5 lines
const truncateDescription = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html; // Set the inner HTML to the passed HTML string
  const textContent = tempElement.textContent || tempElement.innerText; // Get text content
  const lines = textContent.split("\n"); // Split text into lines
  return lines.slice(0, 5).join("\n"); // Return the first 5 lines joined
};

const Blog = () => {
  return (
    <>
      {/* Rendering the Navbar component */}
      <Navbar />

      <div className="container-fluid">
        {/* Header section for the blog page */}
        <div className="container-fluid blog-page-first">
          <h2>Our Blog</h2>
          <p>
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        {/* Main blog content section */}
        <div className="container-fluid blog-page-second">
          <div className="row">
            {posts.map((post, index) => (
              // Mapping through the posts to create a blog card for each post
              <div className="col-md-6" key={index}>
                <div className="blog-card">
                  {/* Blog card header with tutorial label and date */}
                  <h6>
                    <span className="d-flex justify-content-between align-items-center mb-3">
                      <span>
                        <span className="icon">
                          <IoIosVideocam />
                        </span>
                        <span className="sub-title">Tutorial </span>
                      </span>
                      <span className="date">{post.date}</span>{" "}
                    </span>
                  </h6>
                  <h2>{post.title}</h2>
                  <p>{truncateDescription(post.description)}</p>

                  <div className="d-flex justify-content-between align-items-center card-footer">
                    <div className="d-flex">
                      <div className="img-container">
                        <img src={blogImage1} alt="SmartGrader Team" />{" "}
                      </div>
                      <p>SmartGrader Team</p>
                    </div>
                    <Link to={`/blog/${index}`}>
                      Read more <FaArrowRight />{" "}
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

export default Blog; // Exporting the Blog component
