import React, { useState } from "react";

function Calculate() {
  var [n1, setNum1] = useState(0);
  var [n2, setNum2] = useState(0);
  var [n3, setNum3] = useState(0);
  var [result, setResult] = useState("");

  function handleNum1(event) {
    setNum1(event.target.value);
  }
  function handleNum2(event) {
    setNum2(event.target.value);
  }
  function handleNum3(event) {
    setNum3(event.target.value);
  }
  function handleEnter() {
    if (+n1 + +n2 === +n3) {
      setResult("True");
    } else {
      setResult("False");
    }
  }

  return (
    <div className="App">
      <p>Input first num</p>
      <input type="number" onChange={handleNum1} />

      <p>Input second num</p>
      <input type="number" onChange={handleNum2} />

      <p>Input third num</p>
      <input type="number" onChange={handleNum3} />

      <button onClick={handleEnter}> Enter </button>
      <h1>The reult is: {result}</h1>
    </div>
  );
}
export default Calculate;
