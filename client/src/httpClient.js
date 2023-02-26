import axios from "axios";


//send cookies here
export default axios.create({
    withCredentials: true, 
});