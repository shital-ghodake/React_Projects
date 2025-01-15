import React, { useState } from 'react'

export default function Toggel() {

    const [isOn,setIsOn]=useState(false);

    const handleClick=()=>{
      setIsOn(!isOn)
    }
  return (
    <div>
      <p>{isOn?"ON":"OFF"}</p>
      <button onClick={handleClick}>toggelbutton</button>
    </div>
  )
}
