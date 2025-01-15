// import React from 'react'

// export default function practice(props) {
//   return (
//     <div>
//       <li>{props.name}</li>
//       <li>{props.age}</li>
//       <li>{props.age}</li>
//     </div>
//   )
// }

let a=[5]

let b=[...a,10,20,30,40]


//destructuring
let [c,d,...arr]=[...b]
console.log(c);
console.log(d);
console.log(arr);
console.log("using map");
b.map(x=>console.log(x));

let obj={
    name:'ajay',
    city:'pune'
}
let obj1={...obj,marks:88,subject:'math'}
console.log(obj1)

//destructing of object
let {name1,city,...obj3}={...obj1}
console.log(name1)
console.log(city)
console.log(obj3)
