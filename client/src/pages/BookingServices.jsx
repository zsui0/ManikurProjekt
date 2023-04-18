import React, { Component} from "react";

import "../styles/booking.css";

class BookingServices extends Component {

    state = 
    {
        title: '',
    }
    handleEventDrag = (title) => {
        console.log(title);
        this.props.onDragFromOutside(title);
    }

  render(){
    return (

          <div className="servicepicker">
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Saját köröm erősítés")}>Saját köröm erősítés</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Műkörömépítés")}>Műkörömépítés</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Gél lakkozás")}>Gél lakkozás</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Tartós lakkozás")}>Tartós lakkozás</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Hagyományos manikűr")}>Hagyományos manikűr</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Francia manikűr")}>Francia manikűr</div>
            <div  className="service" draggable='true' onDragStart={(event) => this.handleEventDrag("Japán manikűr")}>Japán manikűr</div>
          </div>
    );
  };

}
export default BookingServices;