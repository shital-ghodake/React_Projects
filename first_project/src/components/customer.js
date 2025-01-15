import React from 'react'
import DemoCustomer from './DemoCustomer'

export default function customer(props) {
  if (props.paid){
    return(
      <DemoCustomer/>
    )
  }
  return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </div>
      )
    }
