import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import BookingService from '../services/booking-service';

const BookingForm = () => {
const [serviceName, setServiceName] = useState ("");
const [startDate, setStartDate] = useState(new Date());

const createBooking = async () => {
    try {
        await BookingService.addEvent(serviceName, startDate)
            .then(
                () => {
                    window.location.reload();
                },
                (error) =>{
                    console.log(error);
                }  
            )     
    } catch (error) {
        console.log(error);
    }
}

return(
<div>
    <label>Válassza ki a szolgáltatást:
        <select id="service" onChange={(e) => setServiceName(e.target.value)}>
            <option value="">Válassza ki a szolgáltatást</option>
            <option value="Saját köröm erősítés">Saját köröm erősítés</option>
            <option value="Műkörömépítés">Műkörömépítés</option>
            <option value="Gél lakkozás">Gél lakkozás</option>
            <option value="Tartós lakkozás">Tartós lakkozás</option>
            <option value="Hagyományos manikűr">Hagyományos manikűr</option>
            <option value="Francia manikűr">Francia manikűr</option>
            <option value="Japán manikűr">Japán manikűr</option>
        </select>
    </label>
    <input type="datetime-local" onChange={(DateTime) => setStartDate(DateTime.target.value)}/>
    <button type="button" onClick={() => createBooking()}>Foglalás</button>
</div>
);
};

export default BookingForm;