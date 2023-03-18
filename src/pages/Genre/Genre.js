import React from 'react'
import GenreSort from '../../components/GenreSort/GenreSort'
import Navbar from '../../components/Navbar/Navbar'
import '../Language/Language.css';

function Genre() {
  return (
    <div className='genre- container'>
        <Navbar/>
        <hr className="liner"></hr>
        <GenreSort/>
    </div>
  )
}

export default Genre