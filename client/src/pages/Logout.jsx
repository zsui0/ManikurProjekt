import React from 'react'
import httpClient from '../httpClient'

const Logout = async () => {
  try {
    const resp = await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  } catch (error) {
    console.log("Már ki vagy jelentkezve!");
  }
}
export default Logout