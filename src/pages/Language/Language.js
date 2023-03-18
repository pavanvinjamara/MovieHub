import React from 'react'
import LanguageSort from '../../components/LanguageSort/LanguageSort'
import Navbar from '../../components/Navbar/Navbar'

function Language() {
  return (
    <div className='language-page'>
        <Navbar/>
        <hr className="liner"></hr>
        <LanguageSort/>
    </div>
  )
}

export default Language