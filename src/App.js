import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
// import MovieSpec from './pages/MovieSpecficPage/MovieSpec';
import MovieDetails from './components/Moviedetails/Moviedetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register/Register';
import Language from './pages/Language/Language';
import Genre from './pages/Genre/Genre';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      
     
      <Route exact path='/' element={
      <MainPage isLoggedIn={isLoggedIn}/>}/>
      <Route path="/movie/:id" element={<MovieDetails isLoggedIn={isLoggedIn}/>} />
      {/* <Route exact path='/movieSpec' element={ */}

       <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/language" element={<Language/>}/>
       <Route path="/genre" element={<Genre/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
