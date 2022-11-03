import { connect } from "react-redux"
/* import { setShowModal } from "./store/actions/ui" */
import { Route, Routes } from 'react-router-dom'
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import Calender from "./pages/Calender";
import Guest from './pages/Guest';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Team from './pages/Team';

function App(){
    return(
      <div>
        <Routes>
          <Route path = '/' element={<Main/>}/>
          <Route path = '/Inicio' element={<HomePage/>}/>
          <Route path = '/Invitado' element={<Guest/>}/>
          <Route path = '/Registro' element={<SignUp/>}/>
          <Route path = '/Calendario' element={<Calender/>}/>
          <Route path = '/Perfil' element={<Profile/>}/>
          <Route path = '/Equipo' element={<Team/>}/>
          <Route path = '*' element={<NotFound/>}/>
        </Routes>
      </div>
    );
}

export default App

