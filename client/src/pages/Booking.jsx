import { Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import React, { Fragment, useCallback, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
//import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import styles from '../styles/booking.css'
import BookingService from '../services/booking-service';


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const dnd = withDragAndDrop(Calendar)
const today = new Date()

  var events = [
/*   {
    title: 'My Event',
    start: new Date('2023-03-12T13:45:00'),
    end: new Date('2023-03-12T16:00:00'),
    isDraggable: true,
    resizable: true,
  },
  {
    title:'masodik',
    start: new Date('2023-03-13T13:45:00'),
    end: new Date('2023-03-13T16:00:00')
  } */
]  

const Booking = (props) => {
  const [eventss, setEvents] = useState([]);
  const [isLoading, setLoading] = useState();

  useEffect(() => {

    const getAllBookings = async () => {
      setLoading()
      const data = await BookingService.getEvents();
      var keys = Object.keys(data);
      for (var i = 0; i < keys.length; i++) {
        data[i].start = Date.parse(data[i].start.substring(0,data[i].start.length-2))
        data[i].end = Date.parse(data[i].end.substring(0,data[i].end.length-2))
      }
      //const jsonData = JSON.stringify(data); 
      if (data != null){

        console.log(isLoading)
        setLoading(false);
        setEvents(data)
        console.log(isLoading)
      }
    }
    getAllBookings()

  }, []); 
console.log(events)
//console.log(eventss)

if(!isLoading){
    return (
      <div className="myCustomHeight" styles="height: 10">
        <Calendar
          localizer={localizer}      
          startAccessor="start"
          endAccessor="end"
          events={events}
          draggableAccessor={(event) => true}
          defaultView={Views.WEEK}
          step={15}
          views={['week','day']}
          min={
            new Date(
              today.getFullYear(), 
              today.getMonth(), 
              today.getDate(), 
              8
            )
          }  
          max={
            new Date(
              today.getFullYear(), 
              today.getMonth(), 
              today.getDate(), 
              20
            )
          }
        />    
      </div>
    );
  } else {
    return (
      <div className="myCustomHeight" styles="height: 10">
        <Calendar
          localizer={localizer}      
          startAccessor="start"
          endAccessor="end"
          events={events}
          draggableAccessor={(event) => true}
          defaultView={Views.WEEK}
          step={15}
          views={['week','day']}
          min={
            new Date(
              today.getFullYear(), 
              today.getMonth(), 
              today.getDate(), 
              8
            )
          }  
          max={
            new Date(
              today.getFullYear(), 
              today.getMonth(), 
              today.getDate(), 
              20
            )
          }
        />    
      </div>
    );
  }
}




  
export default Booking;
