import React from "react";
import  "../App.css";
function StudentInfo(props){
    return(
        <div>
            <h1>Student Information</h1>
            <ol>
                <li>Student Name:{props.studentName}</li>
                <li>Student Age:{props.age}</li>
                <li>Student Location:{props.location}</li>

            </ol>
        </div>
    )
}
export default StudentInfo;