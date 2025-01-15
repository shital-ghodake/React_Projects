import React,{useState} from 'react'

export default function DemoFormInput() {
  const [name,setName]=useState('');

  const changeName=(e)=>{
    setName(e.target.value);

  }
    return (
    <div>
      <h1>Display Information</h1>
      <input type="text"
            value={name}
            onChange={changeName}
        />
        <p>{name}</p>
    </div>
  )
}
