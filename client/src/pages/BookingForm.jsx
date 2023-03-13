import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () =>{
const [serviceName, setServiceName] = useState ("");
const [startTime, setStartTime] = useState ("");
const [startDate, setStartDate] = useState(new Date());

return(
<div>
    <label>Válassza ki a szolgáltatást:
        <select id="service" onChange={(e) => setServiceName(e.target.value)}>
            <option value="Saját köröm erősítés">Saját köröm erősítés</option>
            <option value="Műkörömépítés">Műkörömépítés</option>
            <option value="Gél lakkozás">Gél lakkozás</option>
            <option value="Tartós lakkozás">Tartós lakkozás</option>
            <option value="Hagyományos manikűr">Hagyományos manikűr</option>
            <option value="Francia manikűr">Francia manikűr</option>
            <option value="Japán manikűr">Japán manikűr</option>
        </select>
    </label>
    <label>Válassza ki a kívánt időpontot:
        <select id="time" onChange={(e) => setStartTime(e.target.value)}>
            <option value="8:00">8:00</option>
            <option value="8:30">8:30</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>            
        </select>
    </label>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <button type="button" onClick={console.log(serviceName)}>Foglalás</button>
</div>
);
};

export default BookingForm;