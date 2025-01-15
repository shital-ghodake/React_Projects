import React,{useState}from 'react'

/*export default function DemoForm2() {
    const[name,setName]=useState('');
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit =(e)=>{
        alert(`my name is ${name}`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
            value={name}
            onChange={handleName}
            placeholder='Enter Name'/>

        <p>{name}</p>

        <input type='submit' value='ok'/>
      </form>
    </div>
  )
}
*/
// 

// export default function DemoForm2() {
//     const[foodItem,setFoodItem]=useState('')

//     const handleChange=(e)=>{
//         setFoodItem(e.target.value);
//     }
//   return (
//     <div>
//       <select value={foodItem} onChange={handleChange}>
//         <option value="Paneer Roll">Paneer Role</option>
//         <option value="Sarso">Sarso</option>
//         <option value="Paneer Tikka">Paneer Tikka</option>
//         <option value="Hara bhara kabab">Hara bhara kabab</option>
//       </select>

//       <div style={{color:'brown',paddingTop:'20px'}}>{foodItem}
//       </div>
//     </div>
//   )
// }

//import React, { Component } from 'react'

/*export default function DemoForm2(){
    const [inputs,setInputs]=useState({});
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs((values)=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        alert(JSON.stringify(inputs));
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <form>
            UserName:
        <input type="text"
               name="username"
               value={inputs.uname}
               onChange={handleChange}
               placeholder='Enter Name'/>

        <br/>
        <input type="text"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            placeholder='Enter Age'/>
        <input type='submit' value="ClickMe"/>
        </form>
      </div>
    );
  }*/

   /* export default function DemoForm3(){
        const [inputs,setInputs]=useState({});
    
        const handleChange=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setInputs((values)=>({...values,[name]:value}))
        }
        const handleSubmit=(e)=>{
            alert(JSON.stringify(inputs))
        }
    
        return(
            <form onSubmit={handleSubmit}>
                <div>
            <input type="text"
              name="model"
              value={inputs.model}
              onChange={handleChange}
              placeholder="Enter Model"
             />
             <input type="text"
              name="id"
              value={inputs.id}
              onChange={handleChange}
              placeholder="Enter Id"
             />
             <input type="text"
              name="price"
              value={inputs.price}
              onChange={handleChange}
              placeholder="Enter price"
             />
            </div>
            <input type="Submit" value="click here"  />
            </form>
        )
    }*/

   // import React, { useState } from 'react'

export default function FormNew() {
    const [inputs,setInputs]=useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setInputs((values) => ({ ...values, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        alert(JSON.stringify(inputs));
      };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
         name="productId"
         value={inputs.productId} 
         onChange={handleChange}
         placeholder="Enter ProductId" />

         <br />

         <input type="text"
         name='productName'
         value={inputs.productName}
         onChange={handleChange}
         placeholder='Enter ProductName' />

         <br />

         <input type="text"
         name='productPrice'
         value={inputs.productPrice} 
         onChange={handleChange}
         placeholder='Enter Price'/>

         <br />

         <input type="Submit" value="Submit" />

      </form>
    </div>
  )
}


    
    
