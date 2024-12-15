import React, { useState } from 'react'

const App = () => {
  const[color, setColor]=useState("red");
const colorChange=()=>{
  setColor('blue')
}
  return (
    <div>
      <h1>My Favourite Color is {color}!</h1>
      <button onClick={colorChange}>Blue</button>
      </div>
  )
}

export default App