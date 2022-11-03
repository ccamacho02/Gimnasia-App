import React from 'react'
import './InicioForm.css'
import { Link } from 'react-router-dom'

export default function InicioForm() {
  return (
    <div className='formI'>
        <form className="login" action='Inicio'>
            <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" className="user" name="user" placeholder="Ingrese su correo electronico" required/>
                <label>Contraseña</label>
                <input type="password" className="pwd" name="pwd" placeholder="Ingrese su contraseña" /*minLength="8"*/ required/>
                <Link className='NAcc'>¿No tienes cuenta aún? Registrate.</Link>
                <br/>
                <br/>
                <Link className='NApwd'>¿Olvidaste tu contraseña?</Link>
                <input type="submit" 
                className="IS" 
                value="Iniciar Sesión" 
                minLength="6" 
                maxLength="64"></input>
            </div>
            <br/>   
        </form>
    </div>
  )
}
