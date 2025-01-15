import React from "react";

function Message({msg}){
    return(
        <p>{msg}</p>
    )
}
export default function DemoSwitch({value}){

    switch(value){
        case 1:
            return<Message msg="One"/>
        case 2:
            return<Message msg="Two"/>
        case 3:
            return<Message msg="Three"/>
        default:
            return <Message msg="your choice wrong"></Message>
    }
}