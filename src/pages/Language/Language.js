import React from 'react'
import LanguageSort from '../../components/LanguageSort/LanguageSort'
import Navbar from '../../components/Navbar/Navbar'

function Language() {
  return (
    <div className='language-page'>
        <Navbar/>
        <hr></hr>
        <LanguageSort/>
    </div>
  )
}

export default Language