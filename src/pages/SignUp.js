import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../features/players/playerSlice';
import { v4 as uuid } from 'uuid';

import Logo from '../assets/img/Logop.png';
import './SignUp.css';

export default function Registro() {
    const [player, setPlayer] = useState({
        nombre: '',
        correo: ''
    })
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value,
        })
    }
    const handleClick = () => navigate(-1)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPlayer({
            ...player,
            id: uuid(),
        }));
        handleClick()
    }


    return (
        <React.Fragment>
            <header>
                <div>
                    <Link to="/"><img width="50" height="50" src={Logo}></img></Link>
                </div>
            </header>
            <div className='container-register'>
                <form className='register-form' onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <label>Nombre Completo</label>
                    <input className='signin-input' name='nombre' type="text" placeholder="Nombre" onChange={handleChange} required minLength="5"/>
                    <label>Correo electrónico</label>
                    <input className='signin-input' name='correo' type="email" placeholder='Correo electrónico' onChange={handleChange} required/>
                    <label>Contraseña</label>
                    <input className='signin-input' name='contraseña' type="password" placeholder='Contraseña' onChange={handleChange} required pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title='Debe tener al menos un número, una letra mayúscula, una letra minúscula y un largo de 8 caracteres mínimo'/>
                    <label>Confirmar contraseña</label>
                    <input className='signin-input' name='confirmacion' type="password" placeholder='Confirmar contraseña' onChange={handleChange} />
                    <button>Registrarse</button>
                </form>
            </div>
        </React.Fragment>
    )
}
