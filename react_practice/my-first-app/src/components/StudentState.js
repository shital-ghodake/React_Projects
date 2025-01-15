import { useState } from "react";

function StudentState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [marks, setMarks] = useState(0);

  function setInfo() {
    setName("shital");
    setAge(28);
    setMarks(89);
  }

  return (
    <>
      <h3>Student Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Marks: {marks}</p>
      <button onClick={setInfo}>Click Me</button>
    </>
  );
}

export default StudentState;