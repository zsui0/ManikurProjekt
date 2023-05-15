import React, { useState,useEffect} from 'react';
import AuthService from '../services/auth.service';
import Button from 'react-bootstrap/Button';
import 'react-data-grid/lib/styles.css';
import DataGrid  from 'react-data-grid';
import BookingService from '../services/booking-service';  

const MyBookings = (user) => {
  const [events, setEvents] = useState([]);
  const [rowData,setRowData] = useState([]);
  const getAllBookings = async () => {
    const data = await BookingService.getEvents();

    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      data[i].start = new Date(data[i].start.substring(0,data[i].start.length-2))
      data[i].end = new Date(data[i].end.substring(0,data[i].end.length-2))

    }
    if (data != null){
      setEvents(data)
    }
  }
  function getRowData(){
    let adat = [];
    console.log();
    for(var i=0;i<events.length;i++){
      adat.push({title: events[i]["title"],start: events[i]["start"], end: events[i]["end"],button: <Button>Törlés</Button>});
    }
    console.log(events);
    console.log(adat);
    setRowData(adat);
  }
  
  useEffect(() => {
    getAllBookings();
  }, []); 
  useEffect(() => {
    getRowData();
  }, []); 
  console.log(events);

  const columns = [
    { key: 'title', name: 'Title' },
    { key: 'start', name: 'Start' },
    { key: 'end', name: 'End' },
    { key: 'button', name: ''} 
  ];
  
  const rows = [
    {title: 'Example', start: new Date().getTime(), end: "2030.32.22", button: <Button>Törlés</Button> },
    {title: 'Demo', start: new Date().getTime(), end: "2030.32.22"  }
  ];

  return(
    <div style={{"width": "60%", "margin": "auto"}} >
      <DataGrid columns={columns} rows={rowData} />
    </div>
  );
};

export default MyBookings;