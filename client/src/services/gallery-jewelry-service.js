import axios from "axios";
import authHeader from "./auth-header";
import moment from 'moment'

const API_URL = "http://localhost:5000"

const AddGallery = (image) => {
  return axios
    .post(API_URL+"/gallery/add",{image},{ headers: authHeader() })
    .then((response) => {
      return response.data.message
    })
}

const ListAllGallery = () => {
  return axios
    .get(API_URL + "/gallery/listall")
    .then((response) => {
      return response.data.result
    }) 
} 

const AddJewelry = (image, price, type) => {
  return axios
    .post(API_URL+"/jewelry/add",{image, price, type},{ headers: authHeader() })
    .then((response) => {
      return response.data.message
    })
}

const ListAllJewelry = (type) => {
  console.log("Jewelry list: "+type)
  return axios
    .post(API_URL + "/jewelry/listall",{type})
    .then((response) => {
      return response.data.result
    }) 
} 



const GalleryJewelryService = {
  ListAllGallery,
  ListAllJewelry,
  AddGallery,
  AddJewelry
}

export default GalleryJewelryService;