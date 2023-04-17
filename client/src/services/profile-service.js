import axios from "axios";
import authHeader from "./auth-header";
import moment from 'moment'

const API_URL = "http://localhost:5000"

const changePass = (newPass,loggedEmail) => {
  console.log("Service log:"+newPass+"; "+loggedEmail)
  return axios
    .patch(API_URL+"/users/password",{newPass,loggedEmail},{ headers: authHeader() })
    .then((response) => {
      return response.data.message;
    })
}


const ProfileService = {
  changePass
}

export default ProfileService;