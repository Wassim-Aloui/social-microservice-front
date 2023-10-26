import NavBar from '../NavBar';
import Footer from '../Footer';
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function UpdateNews(){
   // const [eventId, setEventId] = useState(''); 
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [auteur, setAuteur] = useState('');
    const { id } = useParams();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const updateBlog = {
        titre,
        description,
        auteur,
      };
  
      axios.put(`http://localhost:8088/api/blog/${id}`, updateBlog)
        .then((response) => {
  
          console.log('Blog updated:', response.data);
        })
        .catch((error) => {
          console.error('Error updating blog:', error);
        });
      
    }; 
     function handleListBlog() {
      window.location.href = '/News';
    }
  
    return(
        <div>
            <NavBar></NavBar>

            <br></br>
      <br></br>
      <div className="container mt-4">
        <br></br>
      <h1 style={{textAlign: "center", marginTop:"50px"}}>Update News</h1>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <label className="form-label">Event ID:</label>
            <input type="text" className="form-control" value={eventId} onChange={(e) => setEventId(e.target.value)} required />
          </div> */}
          <div className="mb-3">
            <label className="form-label">Blog title:</label>
            <input type="text" className="form-control" value={titre} onChange={(e) => setTitre(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Blog Description</label>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Blog author</label>
            <input type="text" className="form-control" value={auteur} onChange={(e) => setAuteur(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => handleListBlog()}>Update Blog</button>
        </form>
      </div>
      <br></br>
      <br></br>

            
            <Footer></Footer>
        </div>
    )
}