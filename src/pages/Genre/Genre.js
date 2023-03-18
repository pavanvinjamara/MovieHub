import React from 'react'
import GenreSort from '../../components/GenreSort/GenreSort'
import Navbar from '../../components/Navbar/Navbar'

function Genre() {
  return (
    <div className='genre- container'>
        <Navbar/>
        <hr></hr>
        <GenreSort/>
    </div>
  )
}

export default Genre