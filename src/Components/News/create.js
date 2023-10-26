import NavBar from '../NavBar';
import Footer from '../Footer';
import React, { useState } from 'react';
import axios from 'axios';


export default function AddNews(){

    const [titre, setTitle] = useState('');
    const [description, setBlogDescription] = useState('');
    const [auteur, setBlogAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newBlog = {
            titre,
            description,
            auteur,
        };
    
        axios.post('http://localhost:8088/api/blog', newBlog)
          .then((response) => {
    
            console.log('Blog created:', response.data);
            window.location.href = '/news';
          })
          .catch((error) => {
    
            console.error('Error creating blog:', error);
          });
      };
    return(
        <div>
              <NavBar></NavBar>
              <br></br><br></br>
      <br></br><br></br>
      <br></br>
      <br></br>
      <div className="container mt-5">
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Blog Title:</label>
            <input
              type="text"
              className="form-control"
              value={titre}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Blog Description:</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setBlogDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Blog Author:</label>
            <input
              type="text"
              className="form-control"
              value={auteur}
              onChange={(e) => setBlogAuthor(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Blog</button>
        </form>
      </div>
      <br></br>
      <br></br><br></br>
      
            <Footer></Footer>
        </div>
    )
}