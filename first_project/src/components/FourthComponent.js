/*import React from "react";

export default function FourthComponent({name,age}) {
    return (
        <div>
            <h2>Fourth Component</h2>
          <p>{name}</p>
          <p>{age}</p>
        </div>
    )
}
*/

export default function FirstComponent({obj1}) {

    let styleObj={border: '2px solid black',backgroundColor:'bisque'}

    return (
        <div style={styleObj}>
            <h2>Fourth Component</h2>
          <p>{obj1.name}</p>
          <p>{obj1.age}</p>
        </div>
    )
}