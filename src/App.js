import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Aboutus from './pages/AboutUs';
import ForSchools from './pages/ForSchools';
import ForTeachers from './pages/ForTeachers';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Users from './pages/UsersPage';


import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserProvider } from './UserContext';


function App() {
  const [user, setUser] = useState({
      id:null,
      isAdmin:null
  })

    const unsetUser = () => {
    localStorage.clear();
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(typeof data._id !== "undefined"){
        setUser({
          id:data._id,
          isAdmin:data.isAdmin
        });
      } else {
        setUser({
          id:null,
          isAdmin: null
        })
      }
    })
  }, [])




  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutUs" element={<Aboutus/>}/>
          <Route path="/ForSchools" element={<ForSchools/>}/>
          <Route path="/ForTeachers" element={<ForTeachers/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
        <Footer />
      </Router>
    </UserProvider> 
  );
}

export default App;
