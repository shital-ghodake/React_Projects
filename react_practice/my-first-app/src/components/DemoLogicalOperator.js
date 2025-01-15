import React from 'react'
//Logical operatir &&
/*This operator is used for checking the condition.if the condition is true, it will return the element right after &&, and if it is false, React will ignore and skip it.*/
export default function DemoLogicalOperator() {
  return (
    <div>
      {(10>5) && alert("This show only when the condition is true")}
    </div>
  )
}
