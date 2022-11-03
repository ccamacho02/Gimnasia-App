import React from 'react';
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Card from '../components/Card';

export default function Perfil() {
    const {id} = useParams()
  return (
    <React.Fragment>
      <Header></Header>
      <div className='container-profile'>
        <div className='name'>
          <h2>{id}<br/>(Deportista)</h2>
          <Card></Card>
        </div>
      </div>
    </React.Fragment>
  )
}
