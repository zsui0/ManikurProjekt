import React, { useState,useEffect} from 'react';
import AuthService from '../services/auth.service';
import Button from 'react-bootstrap/Button';
import 'react-data-grid/lib/styles.css';
import DataGrid  from 'react-data-grid';
import BookingService from '../services/booking-service';  

const MyBookings = (user) => {
  const [rowData,setRowData] = useState([]);

  const deleteBooking = async (e) => {
    console.log(e.target.value)
    try{
      await BookingService.removeEvents(e.target.value)
        .then((resp) => {
          window.location.reload();
          //console.log(resp)
        },
        (error) => {
          console.log(error)
        }
      )
    } catch (err) {
      console.log(err);
    }
  }
  
  const getAllBookings = async () => {
    const data = await BookingService.getEvents();

    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      data[i].start = new Date(data[i].start.substring(0,data[i].start.length-2)).toString();
      data[i].end = new Date(data[i].end.substring(0,data[i].end.length-2)).toString();

    }
    
    let rows = [];
    
    for(var i=0;i<data.length;i++){     
      if(user.currentUser.userid == data[i].userId.toString()){
      rows.push({title: data[i].title,start: data[i].start.substring(4,21), end: data[i].end.substring(4,21),button: <Button value={data[i]._id} onClick={(e) => deleteBooking(e)}>Törlés</Button>});
      }
      setRowData(rows);
    }
  }

  useEffect(() => {
    getAllBookings();
  }, [user]); 


  const columns = [
    { key: 'title', name: 'Típus' },
    { key: 'start', name: 'Kezdet' },
    { key: 'end', name: 'Vég' },
    { key: 'button', name: 'Törlés'} 
  ];
  
/*   const rows = [
    {title: 'Example', start: new Date().getTime(), end: "2030.32.22", button: <Button>Törlés</Button> },
    {title: 'Demo', start: new Date().getTime(), end: "2030.32.22"  }
  ]; */
  
  return(
    <div style={{"width": "60%", "margin": "auto"}} >
      <DataGrid columns={columns} rows={rowData} />
    </div>
  );
};

export default MyBookings;