import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Components/HomePage";
import { LoginForm } from "./Components/Login/loginForm";
import { RegisterForm } from "./Components/Register/registerForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
