import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

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
    />
</div>
)



  
export default Booking;