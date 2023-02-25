import React, {useState, useEffect} from 'react'

const API_URL = "http://localhost:5000"

function App() {

  const[data,setData] = useState([{}])
  
  useEffect(()=>{
    fetch(API_URL+"/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.members === "undefined") ? (
        <p>Loading...</p>
      ) : (
          data.members.map((member,i) => (
            <p key={i}>{member}</p>
          ))
      )}
    </div>
  )
}

export default App