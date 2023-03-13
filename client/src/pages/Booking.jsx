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
  }
]

const dnd = (props) => (
  <div className="myCustomHeight" styles="height: 600">
    <Calendar
      localizer={localizer}    
      startAccessor="start"
      endAccessor="end"
      events={events}
      draggableAccessor={(event) => true}
      defaultView={Views.WEEK}
      views={['week','day']}   
    />    
</div>
)

const Booking = withDragAndDrop(dnd) 

export default Booking;
