import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './HomePage.css'
import CompM from '../assets/img/CompM.png'
import CompF from '../assets/img/CompF.png'
import Olp from '../assets/img/Olp.png'
import Cal1 from '../assets/img/Cal1.png'

export default function HomePage() {
  return (
    <div className='home'>
    <Header/>
    <div className='Main'>
    <div className='Beneficios'>
      <h1>Beneficios de usar ...</h1>
        <div className='Ben1'>1. Te permite ver competencias en VIVO, además obtienes un acceso al calendario de estas(<Link className='Help'>Competencias en vivo</Link>).</div>
        <div className='Imagenes'>
          <img src = {CompM} height = "150px"/>
          <img src={CompF} height = "150px"/>
          <img src={Olp} height = "150px" width="205px"/>
          <img src={Cal1} height = "150px" width="175px"/>
        </div>
        <div className='Ben2'>2.Puedes acceder a una lista de gimnastas, ademas de a su información y estadisticas de competencias(<Link className='Help'>Equipo</Link>).</div>
        <div className='Ben3'>3.Acceso a videos educativos con los cuales podrás aprender nuevos "Elementos"(<Link className='Help'>Educativos</Link>).</div>
        <div className='Ben4'>4.Calendario privado el cual permite añadir eventos personales en la fecha que se desee(<Link className='Help'>Perfil</Link>).</div>
        <div className='Ben4'>4.Calendario privado el cual permite añadir eventos personales en la fecha que se desee(<Link className='Help'>Perfil</Link>).</div>
        <div className='Ben4'>4.Calendario privado el cual permite añadir eventos personales en la fecha que se desee(<Link className='Help'>Perfil</Link>).</div>
        <div className='Ben4'>4.Calendario privado el cual permite añadir eventos personales en la fecha que se desee(<Link className='Help'>Perfil</Link>).</div>
        <div className='Ben4'>4.Calendario privado el cual permite añadir eventos personales en la fecha que se desee(<Link className='Help'>Perfil</Link>).</div>
        <div className='Imagenes'>
          <img src = {CompM} height = "150px"/>
          <img src={CompF} height = "150px"/>
          <img src={Olp} height = "150px" width="205px"/>
          <img src={Cal1} height = "150px" width="175px"/>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}
