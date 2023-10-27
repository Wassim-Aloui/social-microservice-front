import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Components/HomePage";
import { LoginForm } from "./Components/Login/loginForm";
import { RegisterForm } from "./Components/Register/registerForm";
import Ticket from './Components/Ticket/Ticket';
import TicketBack from './Components/admin/TicketBack';
import MyTicket from "./Components/Ticket/MyTicket";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/Ticket" element={<Ticket/>}></Route>
       <Route path="/TicketBack" element={<TicketBack/>}></Route>
       <Route path="/myTickets" element={<MyTicket/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
