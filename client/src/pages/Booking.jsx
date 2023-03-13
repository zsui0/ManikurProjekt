import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import React, { Fragment, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
//import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
//import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'



// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [
  {
    title: 'My Event',
    start: new Date('2023-03-12T13:45:00'),
    end: new Date('2023-03-12T16:00:00'),
    isDraggable: "true",
    resizable: "true",
  },
  {
    title:'masodik',
    start: new Date('2023-03-13T13:45:00'),
    end: new Date('2023-03-13T16:00:00')
  },
  {
    title:'Körömépítés',
    start: new Date('2023-03-15T15:00:00'),
    end: new Date('2023-03-15T18:00:00')
  }
]
const today = new Date();
const dnd = (props) => (
  <div className="myCustomHeight" styles="height: 600">
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
)

const Booking = withDragAndDrop(dnd) 

export default Booking;
