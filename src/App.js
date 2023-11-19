import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import Navbar from "./components/navbar";
import Home from './components/home';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import NewBarber from './components/barber';
import './components/navbar.css'; 
import './components/home.css'; 
import './components/footer.css'; 
import './components/barber.css'; 


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barbers" element={<NewBarber />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          {/* Add more routes for other pages */}
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
