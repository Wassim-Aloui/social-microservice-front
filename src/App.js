import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" exact element={<HomePage />}></Route>
       

      </Routes>
    </div>
  );
}

export default App;