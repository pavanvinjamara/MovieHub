import React from 'react'
import Movies from '../../components/Moviebox/Movies'
import Navbar from '../../components/Navbar/Navbar'
import './MainPage.css'


function MainPage({isLoggedIn}) {
  return (
    <div className='MainPage'>
        <Navbar isLoggedIn={isLoggedIn}/>
       <hr class="liner"></hr>
        <Movies/>
        
       
    </div>
  )
}

export default MainPage