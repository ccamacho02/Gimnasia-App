import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import './Team.css'

export default function Team() {
  return (
    <React.Fragment>
        <Header/>
        <div className='card-team'><Card/></div>
    </React.Fragment>
  )
}
