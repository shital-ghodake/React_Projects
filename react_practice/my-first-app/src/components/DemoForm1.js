import React, { useState } from 'react'

export default function DemoForm1() {

    const [city,setCity]=useState('')

    const handleSubmit=()=>{
        alert('$city')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>

    <input type="button" onClick={handleSubmit} value="ClickMe"/>

      </form>
    </div>
  )
}

/*import React, { useState } from 'react'

export default function DemoForm1() {

    const [city,setCity]=useState('')

    const handleSubmit=()=>{

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>

    <input type='submit' value="ClickMe"/>

      </form>
    </div>
  )
}*/

