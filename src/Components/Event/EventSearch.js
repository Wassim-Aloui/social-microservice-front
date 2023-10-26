import React, { useState } from 'react';
import axios from 'axios';

function EventSearch() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    // Set loading state while fetching data
    setLoading(true);

    // Fetch events based on the search term
    axios.get(`http://localhost:8087/api/v1/events?q=${searchTerm}`)
      .then((response) => {
        setEvents(response.data);
        setLoading(false); // Turn off loading when the data is received
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setLoading(false); // Turn off loading in case of an error
      });
  };

  return (
    <div>
      <h2>Search Events</h2>
      <input
        type="text"
        placeholder="Search events by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? <p>Loading...</p> : null}

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.eventName}</strong>
            <p>Start Date: {event.startDate}</p>
            <p>End Date: {event.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventSearch;
