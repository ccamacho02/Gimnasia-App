import React from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import './NotFound.css';

export default function NotFound() {
    
    const navigate = useNavigate()

    const handleClick = () => navigate(-1)

  return (
    <React.Fragment>
        <body className='container-404'>
            <motion.div className='face'
                animate={{scale: 1, y: [0,-50,0,-50,0]}}
                transition={{duration: 3, repeat: Infinity}}
            >
                <div className='band'>
                    <div className='yellow'></div>
                    <div className='blue'></div>
                    <div className='red'></div>
                </div>
                <div className='eyes'></div>
                <div className='dimples'></div>
                <div className='mouth'></div>
            </motion.div>
            <h1 className='h1-404'>Oops! Algo salió mal!</h1>
            <div className='btn-404'>
                <button onClick={handleClick}>Volver</button>
            </div>
        </body>
    </React.Fragment>
  )
}
