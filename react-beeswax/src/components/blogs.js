import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbarStyle.css";
import "../styles/blogStyle.css";
import logo from "../images/beeswax_logo.png";
import blog1Image from "../images/blog-1-bianca-ackermann-unsplash.jpg";
import blog2Image from "../images/blog-2-aljaz-kavcic-unsplash.jpg";
import blog3Image from "../images/blog-3-jenna-lee-unsplash.jpg";
import blog4Image from "../images/blog-4-arwin-neil-unsplash.jpg";

function BlogCard({ title, date, description, imageUrl }) {
  return (
      <section className="blog-card">
        <Link to={`/blog-post/${title.toLowerCase().replace(/ /g, '-')}`}>
          <article>
            <div className="content">
              <h2>{title}</h2>
              <p>Posted on <time dateTime={date}>{new Date(date).toLocaleDateString()}</time></p>
              <p>{description}</p>
            </div>
            <img src={imageUrl} alt="Description of Image"/>
          </article>
        </Link>
      </section>
  );
}

export function Blog() {
  return (
      <div>
        <main className="cards-container">
          <BlogCard
              title="Blog Post Title 1"
              date="2024-03-15"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl={blog1Image}
          />
        <BlogCard
            title="Blog Post Title 2"
            date="2024-03-15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl={blog2Image}
        />
        <BlogCard
            title="Blog Post Title 3"
            date="2024-03-15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl={blog3Image}
        />
        <BlogCard
            title="Blog Post Title 4"
            date="2024-03-15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl={blog4Image}
        />

          {/* Repeat for other posts */}
        </main>
        <footer>
          <p>© 2024 BeesWax Packaging. All rights reserved.</p>
        </footer>
      </div>
  );
}

