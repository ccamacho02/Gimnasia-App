import './Educativos.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function Educativos() {

  return (
    <div className='Educativos'>
        <Header/>
        <div className='row-menu'>
            <div className='divlinks'>
            <Button className='links' name="Educativo 1">Educativo 2</Button>
            </div>
            <div className='divlinks'>
                <Button className='links' name="Educativo 2">Educativo 2</Button>
            </div>
            <div className='divlinks'>
            <Button className='links' name="Educativo 3">Educativo 2</Button>
            </div>
            <div className='divlinks'>
            <Button className='links' name="Educativo 4">Educativo 2</Button>
            </div>
            <div className='divlinks'>
            <Button className='links' name="Educativo 5">Educativo 2</Button>
            </div>
            <div className='divlinks'>
            <Button className='links' name="Educativo 6">Educativo 2</Button>
            </div>           
        </div>
        <div className='videos'>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/PWsN43tgZyc" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
        </div>
        <Footer/>


    </div>
  )
}
