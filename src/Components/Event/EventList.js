import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import Footer from '../Footer';

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); 
  
  useEffect(() => {

    axios
      .get('http://localhost:8087/api/v1/events')
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  function handleAddEvent() {
    window.location.href = '/EventCreate'; 
  }
  function handleEditEvent() {
    window.location.href = '/EventUpdate';
  }


  function handleDeleteEvent(id) {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');

    if (confirmDelete) {
      axios
        .delete(`http://localhost:8087/api/v1/events/${id}`)
        .then((response) => {
          console.log('Event deleted:', response.data);
          axios
            .get('http://localhost:8087/api/v1/events')
            .then((response) => {
              setEvents(response.data);
            })
            .catch((error) => {
              console.error('Error fetching events:', error);
            });
        })
        .catch((error) => {
          console.error('Error deleting event:', error);
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
          <h2>Event List</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by event name"
              className="form-control"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <button className="btn btn-success" onClick={() => handleAddEvent()}>
            Add Event
          </button>
        </div>
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            events
              .filter((event) =>
                event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((event) => (
                <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{event.eventName}</h5>
                      <p className="card-text">
                        <strong>Start Date:</strong>{' '}
                        {new Date(event.startDate).toLocaleDateString()}
                      </p>
                      <p className="card-text">
                        <strong>End Date:</strong>{' '}
                        {new Date(event.endDate).toLocaleDateString()}
                      </p>
                      <div className="button-container">
                        <button
                          className="btn btn-warning mr-2"
                          onClick={() => handleEditEvent(event.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleDeleteEvent(event.id)}
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

export default EventList;
