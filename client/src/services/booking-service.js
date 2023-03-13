import axios from "axios";
import authHeader from "./auth-header";
import moment from 'moment'

const API_URL = "http://localhost:5000"

const addEvent = (title, startDate) => {
  let endDate = moment(startDate).add(60, 'm').toDate();
  return axios
    .post(API_URL+"/booking",{title, startDate, endDate},{ headers: authHeader() })
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


const BookingService = {
  addEvent,
  getEvents
}

export default BookingService;

