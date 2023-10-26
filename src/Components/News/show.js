import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

function BlogPost() {
  const { id } = useParams(); // Get the ID from the route parameter
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post data by its ID
    // You can use your own data fetching logic here (e.g., an API call)
    // Replace this with your actual data retrieval logic
    fetch(`http://127.0.0.1:8088/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(blogPost)
        setBlogPost(data)})
      .catch((error) => console.error(error));
  }, [id]);

  if (!blogPost) {
    return <div><NavBar></NavBar>
    <br/>
    <br/>
    <br/>
    <h2>Loading...</h2>
        <Footer></Footer></div>;
  }

  return (
    <div>
        <NavBar></NavBar>
    <br/>
    <br/>
    <br/>
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
            
            <h2>titre: {blogPost.titre}</h2>
            <h5>auteur: {blogPost.auteur}</h5>
            <p><b>description:</b> {blogPost.description}</p>
        </div>
      </div>
    </div>
            <Footer></Footer>
      
    </div>
  );
}

export default BlogPost;
