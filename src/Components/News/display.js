import NavBar from '../NavBar';
import Footer from '../Footer';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




export default function DisplayNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios
      .get('http://127.0.0.1:8088/api/blog')
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  function handleAddEvent() {
    window.location.href = '/addNews';
  }

  function handleEditEvent(id) {
    window.location.href = `news/updateNews/${id}`;
  }

  function handleDeleteEvent(id) {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');

    if (confirmDelete) {
      axios
        .delete(`http://localhost:8088/api/blog/${id}`)
        .then((response) => {
          console.log('Blog deleted:', response.data);
          axios
            .get('http://localhost:8088/api/blog')
            .then((response) => {
              setNews(response.data);
            })
            .catch((error) => {
              console.error('Error fetching blogs:', error);
            });
        })
        .catch((error) => {
          console.error('Error deleting blog:', error);
        });
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <br></br><br></br>

      <div class="latest-news mt-150 mb-150">
        <h2>News List</h2>
        <div class="container">
          <br></br>
          <button className="btn btn-success" onClick={() => handleAddEvent()}>
            Add news
          </button>
          <br></br>
          <br></br>
          <div class="row">
            {loading ? (
              <p>Loading...</p>
            ) : (
              news
                .map((blog) => (
                  <div key={blog.id} class="col-lg-4 col-md-6">
                    <div class="single-latest-news">
                      <Link to={"blog/"+blog.id}><img src="/assets/img/x.jpg" alt="Image Alt Text" /></Link>
                      <div class="news-text-box">
                        <h3><a href="single-news.html">{blog.titre}</a></h3>
                        <p class="blog-meta">
                          <span class="author"><i class="fas fa-user"></i> {blog.auteur}</span>
                        </p>
                        <p class="excerpt">{blog.description}</p>
                        <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
                      </div>
                      <button
                        className="btn btn-warning mr-2"
                        onClick={() => handleEditEvent(blog.id)}
                      >
                        
                        Edit
                      </button>
                      <Link to ={"updateNews/"+blog.id} className="btn btn-warning mr-2">Edit</Link>
                      <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteEvent(blog.id)}
                        >
                          Delete
                        </button>
                    </div>
                  </div>
                ))
            )}



          </div>


        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}