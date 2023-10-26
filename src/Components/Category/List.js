import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import Footer from '../Footer';


function List() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        axios.get('http://localhost:8222/api/v1/categories').then((response) => {
            setCategories(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching :', error);
            setLoading(false);
          });
      }, []);

      function handleAddCat() {
        window.location.href = '/addcat'; 
      }



      function handleDeleteCat(id) {
        const confirmDelete = window.confirm('Are you sure you want to delete?');
    
        if (confirmDelete) {
          axios
            .delete(`http://localhost:8222/api/v1/categories/${id}`)
            .then((response) => {
              console.log('Event deleted:', response.data);
              axios
                .get('http://localhost:8222/api/v1/categories')
                .then((response) => {
                  setEvents(response.data);
                })
                .catch((error) => {
                  console.error('Error fetching:', error);
                });
            })
            .catch((error) => {
              console.error('Error deleting:', error);
            });
        }
      }
    



      function handleSearch(e) {
        setSearchQuery(e.target.value);
      }

    return (
      <div>
        <NavBar />
        <br />
        <br />
        <div className="container mt-5">
          <div className="text-center mb-4">
            <h2>Category List</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by event name"
                className="form-control"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <button className="btn btn-success" onClick={() => handleAddCat()}>
              Add Category
            </button>
          </div>
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : (
              categories
                .filter((cat) =>
                  cat.catName.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((cat) => (
                  <div key={cat.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{cat.catName}</h5>
                      
                        <div className="button-container">
                          <button
                            className="btn btn-warning"
                            onClick={() => handleDeleteCat(cat.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );




    
}

export default List;