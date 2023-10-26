import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import Footer from '../Footer';

function EventCreate() {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      eventName,
      startDate,
      endDate,
    };

    axios.post('http://localhost:8087/api/v1/events', newEvent)
      .then((response) => {

        console.log('Event created:', response.data);
        window.location.href = '/eventlist';
      })
      .catch((error) => {

        console.error('Error creating event:', error);
      });
  };

  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <div className="container mt-5">
        <h2>Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event Name:</label>
            <input
              type="text"
              className="form-control"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date:</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">End Date:</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Event</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default EventCreate;
