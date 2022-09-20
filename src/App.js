import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/home"
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Nav from './components/nav';
import GoogleSignIn from './components/googleSignIn';

export const UserContext = React.createContext()


function App() {
  const [user, setUser] = useState(null)

   // user profile 
   const person ={
    name : "Oliyide Ibrahim",
    email : "oliyide@gmail.com",
    age: 27,
    location : "Shagamu"
  }
  
  const job = {
    title : "Automation Engineer",
    organization : "J4 Automation Limited",
    headquarter : "Port Harcourt",
  
  }
  const details = {...person, ...job}

  //handle user login
  const handleLogin = (e) => {
    e.preventDefault();
    setUser(details);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
     <div className="App">
     <Nav/>
     <GoogleSignIn/>
     {user ? (
        <button className="left" onClick={(e) => handleLogout(e)}>
          Logout
        </button>
      ) : (
        <button className="left" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/blog1' element={<Blog1/>} ></Route>
        <Route path='/blog2' element={<Blog2/>} ></Route>
      </Routes>
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
