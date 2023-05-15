import React, { Component} from "react";

import "../styles/booking.css";

class BookingServices extends Component {

    state = 
    {
        title: '',
    }
    handleEventDrag = (title,length) => {
        console.log(title+ " : " + length);
        this.props.onDragFromOutside(title,length);
    }

  render(){
    return (

          <div className="servicepicker">
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Saját köröm erősítés",40)}>Saját köröm erősítés: 40 perc</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Műkörömépítés",60)}>Műkörömépítés: 60 perc</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Gél lakkozás",30)}>Gél lakkozás: 30 perc</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Tartós lakkozás",40)}>Tartós lakkozás: 40 perc</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Hagyományos manikűr",70)}>Hagyományos manikűr: 70 perc</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Francia manikűr",60)}>Francia manikűr: 60 perc</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Japán manikűr",90)}>Japán manikűr: 90 perc</div>
          </div>
    );
  };

}
export default BookingServices;