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
//import { events } from "../../../server/models/user";


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const ma = moment();
const user = JSON.parse(localStorage.getItem("user"));


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
    //data.forEach
    for (var i = 0; i < keys.length; i++) { //Átformázás
      data[i].start = new Date(data[i].start.substring(0,data[i].start.length-2))
      data[i].end = new Date(data[i].end.substring(0,data[i].end.length-2))
      //data[i].id = data[i]._id;
      //data[i].user = data[i].userId;

    }
    if (data != null){
      this.setState((state) =>{
        state.events = data
      });
      console.log(this.state.events);
    }
  }

  componentDidMount() {    
    this.getAllBookings(); 
  } 

  onEventResize = (data) => {
    /* Ha szeretnénk, hogy csinájon valamit resize közben
    const { start, end } = data;

    this.setState((state) => {
      state.events[data.event.id].start = start;
      state.events[data.event.id].end = end;
      return { events: [...state.events] };
    });*/
  };

  doesItFit = (start, end) =>{
    console.log(start)
    console.log(end)
    var nooccupied=true
    var latestend=new Date(start.getFullYear(),start.getMonth(),start.getDate(),8,0,0,0)
    var earliestbegin=new Date(start.getFullYear(),start.getMonth(),start.getDate(),16,0,0,0)
    var day=start.getDate()    
    if(start.getHours()>=8)
    { 
      if(end.getHours()< 16 || (end.getHours() === 16 && end.getMinutes() === 0) )
      {
        
        this.state.events.forEach(event =>{
          if(((event.start) <= (start) && (event.end) > (start)) ||((event.start) < (end) && (event.end) >= (end)))
          {    
            nooccupied=false;            
          }
          if(event.start.getDate()===day){
            if((event.end)<=(start) && (event.end)>latestend){                
              latestend=(event.end);
            }else if((event.start)>=(end) && (event.start)<earliestbegin){
              earliestbegin=(event.start);
            }
          }
        });
        if(nooccupied===false){
          alert("Átfedés már foglalt időponttal!")
          return false;          
        }else if((((earliestbegin.getTime()-latestend.getTime())>3600000)&&
        (((start.getTime()!=latestend.getTime()) && ((start.getTime()-latestend.getTime())<2400000))||((end.getTime()!=earliestbegin.getTime())&&((earliestbegin.getTime()-end.getTime())<2400000))))){
          alert("A kiválasztott időpont nem lehetséges! Kérjük hagyjon legalább 40 percet az időpontok között vagy illeszkedjen egy szomszédos időponthoz!")
          return false;
        }
        else{
          return true;
        }
      }
    }
    return false;
  }

  onEventDrop = async (data) => {
    console.log(data);
    const { start, end} = data;
    if(data.event.userId === user._id) 
    {
      if(this.doesItFit(data.start, data.end))
      {
        await BookingService.changeEvent(data.event._id, moment(data.start).add(2,"hours"), moment(data.end).add(2,"hours"))
        .then(
          (error) =>{
              console.log(error);
          }  
          )
      }
    }
    else{
      alert("A kiválasztott időpont nem a tiéd!")
    } 
    
  };

  handleTitle = (title, length) =>{
    this.setState({
      act_title: title,
      act_length: length
    })
  }

  onDropFromOutside = async (data) => {
    console.log(data);
    const end = moment(data.start).add(this.state.act_length,"minutes").toDate();
    if(this.doesItFit(data.start, end))
    {
      await BookingService.addEvent(this.state.act_title, moment(data.start).add(2,"hours"), moment(end).add(2,"hours"), this.state.act_length)
      .then(
        (error) =>{
            console.log(error);
        }  
        )
    }
  }

  sendEvent = async () =>{
    try {
    this.state.events.forEach(async event =>
      await BookingService.addEvent(event.title, event.start, event.end)
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
return(
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
            eventPropGetter={(event) => {
              let backgroundColor = 'lightgrey';
              let color = 'black';
              if(event.userId === user._id)
              {
                backgroundColor = 'pink';
                color = 'black';
              }
              return { style: { backgroundColor, color } }
            }}
            views={['week','day']}
            step={10}
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
                16
              )
            }
          />
          </div>
            <BookingServices onDragFromOutside ={ this.handleTitle} />
        </div>
      </div>

);
  }
}
export default Booking;
