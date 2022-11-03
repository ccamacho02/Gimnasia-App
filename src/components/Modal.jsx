import React from 'react';
import X from '../assets/img/X.png';
import './Modal.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice'
import InicioForm from './InicioForm';

export default function Modal() {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeModal())
  }

  return (
    <div className='modal'>
        <div className='body'>
            <button className='close' onClick={handleClick}><img src={X} height="25px" width="25px"/></button>
            <InicioForm></InicioForm>
        </div>
    </div>
  )
}
