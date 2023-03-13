import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import React, { Fragment, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
//import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import styles from '../styles/booking.css'


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const dnd = withDragAndDrop(Calendar)

const Booking = (props) => (
  <div className="myCustomHeight" styles="height: 10">
    <dnd
      localizer={localizer}      
      startAccessor="start"
      endAccessor="end"
      //allDaySlot="false"
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



  
export default Booking;
