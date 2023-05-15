import axios from "axios";
import authHeader from "./auth-header";
import moment from 'moment'

const API_URL = "http://localhost:5000"

const addEvent = (title, startDate, endDate, length) => {
  return axios
    .post(API_URL+"/booking",{title, startDate, endDate, length},{ headers: authHeader() })
    .then((response) => {
      return true
    });
}

const getEvents = () => {
  return axios
    .get(API_URL+"/booking",{ headers: authHeader() })
    .then(response => {
      //console.log(response.data.result)
      return response.data.result;
    })
}
const changeEvent = (id, startDate, endDate) => {
  return axios
    .patch(API_URL+"/booking",{id, startDate, endDate},{ headers: authHeader() })
    .then((response) => {
      return true
    });
}


const BookingService = {
  addEvent,
  getEvents,
  changeEvent
}

export default BookingService;

