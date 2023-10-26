import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import EventList from './Components/Event/EventList';
import EventCreate from './Components/Event/EventCreate';
import EventUpdate from './Components/Event/EventUpdate';
import EventSearch from './Components/Event/EventSearch';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/EventCreate" element={<EventCreate />} />
        <Route path="/EventUpdate" element={<EventUpdate />} />
        <Route path="/EventSearch" element={<EventSearch />} />

      </Routes>
    </div>
  );
}

export default App;