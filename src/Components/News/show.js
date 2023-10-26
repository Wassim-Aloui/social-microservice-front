import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import axios from 'axios';
import CommentForm from './commentForm';

function BlogPost() {
  const { id } = useParams(); // Get the ID from the route parameter
  const [blogPost, setBlogPost] = useState(null);
  const [comments, setComments] = useState([]);

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
    fetch(`http://127.0.0.1:8084/api/v1/comments/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data")
        console.log(data)
        setComments(data)})
      .catch((error) => console.error(error));
  }, [id]);

  const handleCommentSubmit = async(newComment) => {
    // You can add the new comment to your comments state or send it to your server
    // For example, if you have a comments state array, you can do:
    console.log(newComment)
    let newCom = {
    "content":newComment,
    }
    const response = await axios.post(`http://127.0.0.1:8084/api/v1/comments/create/${id}/1`, newCom);
    setComments([...comments, { id: comments.length + 1, content: newComment }]);
  };

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
            <hr/>
            <br/>
            <div className='container-fluid'>
                <h3>Comments: </h3>
                <ul>
                    {
                        comments.map((comment)=>(
                            <li className="list-group-item" key={comment.id}>
                            {comment.content}
                        </li>
                            ))
                    }
                </ul>
                <CommentForm onCommentSubmit={handleCommentSubmit} />
            </div>
        </div>
      </div>
    </div>
            <Footer></Footer>
      
    </div>
  );
}

export default BlogPost;
