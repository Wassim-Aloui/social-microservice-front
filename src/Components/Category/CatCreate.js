import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import Footer from '../Footer';


function CatCreate(){

    const [catName, setCatName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = {
            catName,
          };


          axios.post('http://localhost:8083/api/v1/categories', newCategory)
          .then((response) => {
    
            console.log('category created:', response.data);
            window.location.href = '/categories';
          })
          .catch((error) => {
    
            console.error('Error creating:', error);
          });

};


return(

    <div>

<NavBar />
      <br></br>
      <br></br>
      <div className="container mt-5">
        <h2>Create Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Category Name:</label>
            <input
              type="text"
              className="form-control"
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Category</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <Footer />


    </div>




)



}


export default CatCreate;