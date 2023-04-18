import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "../App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/booking.css";
import BookingServices from "./BookingServices";
import BookingService from '../services/booking-service';


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const ma = moment();

 class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  getAllBookings = async () => {
    const data = await BookingService.getEvents();
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      data[i].start = new Date(data[i].start.substring(0,data[i].start.length-2))
      data[i].end = new Date(data[i].end.substring(0,data[i].end.length-2))
      data[i].id = i;

    }
    if (data != null){
      this.state.events = data;
      console.log(this.state.events);
    }
  }
  componentDidMount() {    
    this.getAllBookings();  
  }  

  onEventResize = (data) => {
    /* Ha szeretnénk, goyg csinájon valamit resize közben
    const { start, end } = data;

    this.setState((state) => {
      state.events[data.event.id].start = start;
      state.events[data.event.id].end = end;
      return { events: [...state.events] };
    });*/
  };

  onEventDrop = (data) => {
    console.log(data);
    const { start, end} = data;

    this.setState((state) => {
      state.events[data.event.id].start = start;
      state.events[data.event.id].end = end;
      return { events: [...state.events] };
    });
  };

  handleTitle = (title) =>{
    this.setState({act_title: title})
  }

  onDropFromOutside = (data) => {
    console.log(data);
    this.setState((state) => {
      state.events[state.events.length]= {
        start: data.start,
        end:  moment(data.start).add(1,"hours").toDate(),
        title: this.state.act_title,
        id: state.events.length
      };
      return { events: [...state.events] };
    });
  }

  sendEvents = async () =>{
    try {
    this.state.events.forEach(async event =>
      await BookingService.addEvent(event.title, event.start)
      .then(
        (error) =>{
            console.log(error);
        }  
        ))
          window.location.reload();
      } catch (error){
        console.log(error);
      }
      
  }


  render() {
    return (
      <div className="App">
        <div className="allbooking">
          <div className="calendar">
          <DnDCalendar
            defaultDate={moment().toDate()}
            defaultView="week"
            events={this.state.events}
            localizer={localizer}
            onEventDrop={this.onEventDrop}
            onEventResize={this.onEventResize}
            onDropFromOutside={this.onDropFromOutside}
            views={['week','day']}
            step={15}
            min={
              new Date(
                ma.get("year"), 
                ma.get("month"), 
                ma.get("date"), 
                8
              )
            }
            max={
              new Date(
                ma.get("year"), 
                ma.get("month"), 
                ma.get("date"), 
                20
              )
            }
          />
          </div>
            <BookingServices onDragFromOutside ={ this.handleTitle} />
            <div className="booking-button">
              <button onClick={this.sendEvents}>Foglalások elküldése</button>
            </div>
        </div>
      </div>
    );

  }
}

export default Booking;
