import React from "react"
import './Main.css'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Logo from '../assets/img/Logop.png'
import Modal from "../components/Modal"
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { openModal } from '../features/modal/modalSlice';


export default function Home() {

  /* const onXclicked = () => {
    dispatch(closeModal());
  }
  */

  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal())
  }


  return (
    <div className="block">
      <header>
        <div>
          <Link><img width="50" height="50" src={Logo}></img></Link>
        </div>
      </header>
      <div className="main">
        <div id="left" >
          <motion.img transition={{ duration: 12 }}
            animate={{
              y: [0, 500, 0]
            }}
            align="left" src="https://colorearimagenes.net/wp-content/uploads/2014/12/gimnasia-en-barra-8.gif">
          </motion.img></div>

        <div id="center">
          <motion.h1
            initial={{ color: '#868C8C' }}
            transition={{ duration: 10 }}
            animate={{
              color: '#000',
            }}>BIENVENID@ .....
          </motion.h1>
          {/*<Button name ="Iniciar Sesión" onClick={onModalClicked}></Button>*/}
          <button className="HELP" onClick={handleClick}>Iniciar Sesión</button>
          <Link to="/Invitado"><Button name="Invitado"></Button></Link>
          <Link to="/Registro"><Button name="Registrarse"></Button></Link>
        </div>

        <div
          id="right" >
          <motion.img
            transition={{ duration: 12 }}
            animate={{
              y: [0, 500, 0]
            }}
            height="530" width="460" align="right" src="https://static.vecteezy.com/system/resources/thumbnails/007/444/725/small_2x/one-single-line-drawing-of-young-handsome-gymnast-man-exercising-pommel-horse-illustration-graphic-healthy-lifestyle-and-athletic-sport-concept-modern-continuous-line-draw-design-vector.jpg">
          </motion.img></div>
      </div>
      <Footer>
      </Footer>
      <div id="form">
        <form>
          <label>Recibe Nuestras Noticias:</label>
          <input type="email" className="news" multiple placeholder="Email"></input>
          <input type="submit" className="snews"></input>
        </form>
      </div>

      { isOpen ? <Modal/> : null}

    </div>
  );
}

