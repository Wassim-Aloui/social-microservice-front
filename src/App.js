import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import EventList from './Components/Event/EventList';
import EventCreate from './Components/Event/EventCreate';
import EventUpdate from './Components/Event/EventUpdate';
import EventSearch from './Components/Event/EventSearch';
<<<<<<< HEAD
import List from './Components/Category/List';
import CatCreate from './Components/Category/CatCreate';

=======
import AddNews from './Components/News/create';
import BlogPost from './Components/News/show';
import DisplayNews from './Components/News/display';
import UpdateNews from './Components/News/update';
>>>>>>> 7351480307dbd9d659622ab36263472afcdd6c80


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" exact element={<HomePage />}></Route>

        <Route path="/eventlist" element={<EventList />} />
        <Route path="/EventCreate" element={<EventCreate />} />
        <Route path="/EventUpdate" element={<EventUpdate />} />
        <Route path="/EventSearch" element={<EventSearch />} />
        <Route path="/catlist" element={<List />} />
        <Route path="/addcat" element={<CatCreate />} />

        <Route path="/news" element={<DisplayNews />} />
        <Route path="/addNews" element={<AddNews />} />
        <Route path="/news/updateNews/:id" element={<UpdateNews />} />
        <Route path="news/blog/:id" element={<BlogPost/>} />

      </Routes>
    </div>
  );
}

export default App;