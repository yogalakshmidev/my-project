import React, { useState } from 'react'

const App = () => {
  const[car, setCar]=useState({
      name:"BMW",
      color:"red",
      model:"2003",
      year:"2024"
  });
  const changeColor=()=>{
    setCar((prev)=>{
      return{...prev,color:"blue"}
      // use to update particular data in the state
    })
  }
  return (
    <div>
      <h1>My Favourite Car is {car.name}!</h1>
      <p>It is {car.color} and model {car.model} bought in the year {car.year}</p>
      <button onClick={changeColor}>Blue</button>
      
      </div>
  )
}

export default App