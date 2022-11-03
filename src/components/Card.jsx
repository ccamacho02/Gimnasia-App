import React from 'react'
import { useSelector } from 'react-redux';
import './Card.css';
import Gimnasta from '../assets/img/gimnasta.jpg'

export default function Card() {

  const players = useSelector(state => state.players)
  console.log(players)

  return (
    <React.Fragment>
      {players.map(player => (
        <div key={player.id} className='each-card'>
          <button className='card-container'>
            <img className='card-img' src={Gimnasta} alt='imagen del card'/>
            <h2 className='card-title'>{player.nombre}</h2>
            <p className='card-description'>{player.correo}</p>
          </button>
        </div>
      ))}
    </React.Fragment>
  )
}
