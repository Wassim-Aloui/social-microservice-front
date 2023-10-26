import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import Footer from '../Footer';

function EventUpdate() {
  const [eventId, setEventId] = useState(''); 
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEvent = {
      eventName,
      startDate,
      endDate,
    };

    axios.put(`http://localhost:8087/api/v1/events/${eventId}`, updatedEvent)
      .then((response) => {

        console.log('Event updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating event:', error);
      });
    
  }; 
   function handleListEvent() {
    window.location.href = '/EventList';
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <div className="container mt-4">
        <h2>Update Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event ID:</label>
            <input type="text" className="form-control" value={eventId} onChange={(e) => setEventId(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Name:</label>
            <input type="text" className="form-control" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date:</label>
            <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">End Date:</label>
            <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => handleListEvent()}>Update Event</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default EventUpdate;
