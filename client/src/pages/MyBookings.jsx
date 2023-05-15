import React, { useState} from 'react';
import AuthService from '../services/auth.service';
import Button from 'react-bootstrap/Button';
import 'react-data-grid/lib/styles.css';
import DataGrid  from 'react-data-grid';
  
const MyBookings = (user) => {
  
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'start', name: 'Start' },
    { key: 'end', name: 'End' },
    { key: 'button', name: ''}
  ];
  
  const rows = [
    { id: 0, title: 'Example', start: new Date().getTime(), end: "2030.32.22", button: <Button>Törlés</Button> },
    { id: 1, title: 'Demo', start: new Date().getTime(), end: "2030.32.22"  }
  ];

  return(
    <div style={{"width": "60%", "margin": "auto"}} >
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default MyBookings;