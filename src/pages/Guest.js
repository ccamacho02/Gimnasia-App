import React from "react";
import './Guest.css';
import Logo from '../assets/img/Logop.png'
import Que_es from '../assets/img/Que_es.png';
import Cronograma from '../assets/img/Cronograma.png';
import Practica from '../assets/img/Practica.png'
import { Link } from 'react-router-dom';

export default function Guest() {
  return (
    <React.Fragment>
        <div className='Header'>
            <Link to="/"><img width="50" height="50" src={Logo}></img></Link>
            <div className='nav'>
                <li>
                    <ul><a>Opciones</a></ul>
                </li>
            </div>
        </div>
        <div className="contenedor">
            <Link className="link" to="/Informacion">
                <div className="left-guest">
                    <img className="imagen" src={Que_es}></img>
                    <h2 className="text"><b>¿Qué es?</b></h2>
                </div>
            </Link>
            <Link className="link" to="/Ubicaciones">
                <div className="center-guest">
                    <img className="imagen" src={Practica}></img>
                    <h2 className="text"><b>¿Dónde se puede practicar?</b></h2>
                </div>
            </Link>
            <Link className="link" to="Competencias">
                <div className="right-guest">
                    <img className="imagen" src={Cronograma}></img>
                    <h2 className="text"><b>Cronograma de competencias</b></h2>
                </div>
            </Link>
        </div>
    </React.Fragment>
  )
}
