import { useState } from "react";

export default function Birthday() {
  const [dob, setDOB] = useState();
  const [number, setNumber] = useState();
  const [output, setOutput] = useState();

  function checkLuckyBday() {
    let newDOB = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < newDOB.length; i++) {
      sum = sum + parseInt(newDOB[i]);
    }
    if (parseInt(sum % number) === 0) setOutput("Lucky");
    else setOutput("Unlucky");
  }
  return (
    <div>
      <h1>is your bday lucky</h1>
      <input
        type="date"
        name="dob"
        required
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <input
        type="number"
        name="number"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn" onClick={checkLuckyBday}>
        check
      </button>
      <div>{output}</div>
    </div>
  );
}
