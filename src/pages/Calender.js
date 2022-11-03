import React, {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)



const locales = {
    'en-US' : require('date-fns/locale/en-US'),
    es: require("date-fns/locale/es"),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const myEventsLists2 = [
    {
        title: "Fisioterapia",
        allDay: true,
        start: new Date(2022, 9, 21),
        end: new Date(2022, 9, 22),
    },
    {
        title: "Entreno",
        start: new Date(2022, 9, 8),
        end: new Date(2022, 9, 10),
    }, 
    {
        title: "Chequeo",
        start: new Date(2022, 9, 30),
        end: new Date(2022, 9, 31),
    },
];

function Calender() {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(myEventsLists2)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className='calendarioo'>
        <Header></Header>
        <div className="Calender">
            <h1>Calendario</h1>
            <h2>Crear nuevo evento</h2>
            <div>
                <input 
                    type = "text" 
                    placeholder = "Nombre" 
                    style = {{width: "20%", marginRight: "10px"}}
                    value = {newEvent.title}
                    onChange = {(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker 
                    locale="es"
                    placeholderText='Inicio' 
                    style = {{marginRight: "10px"}}
                    selected = {newEvent.start}
                    onChange = {(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker 
                    placeholderText='Fin' 
                    style = {{marginRight: "10px"}}
                    selected = {newEvent.end}
                    onChange = {(end) => setNewEvent({...newEvent, end})}
                />
                <button style={{marginTop: "10px"}} onClick = {handleAddEvent}>
                    Crear evento
                </button>
            </div>
            <Calendar 
                localizer={localizer} 
                events={allEvents}
                startAccessor="start" 
                endAccessor="end" 
                style={{height: 500, margin: "50px"}}
            />
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Calender