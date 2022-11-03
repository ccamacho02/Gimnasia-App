import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logop.png'
import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
        <Link to = "/"><img width="50" height="50" src={Logo}></img></Link>
        <div className='nav'>
            <li>
                <ul><Link to="/Perfil/:id" className='headerA'>Perfil</Link></ul>
                <ul><Link to="/Educativos" className='headerA'>Educativos</Link></ul>
                <ul><Link to="/Competencia" className='headerA'>Competencia en Vivo</Link></ul>
                <ul><Link to="/Equipo" className='headerA'>Equipo</Link></ul>
                <ul><Link to="/Calendario" className='headerA'>Calendario</Link></ul>
            </li>
      </div>
    </div>
  )
}
