import { useState } from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
export default function Birthday() {
  const [dob, setDOB] = useState();
  const [number, setNumber] = useState();
  const [output, setOutput] = useState();

  function checkLuckyBday() {
    if (
      dob === undefined ||
      dob === "" ||
      number === undefined ||
      number === ""
    ) {
      setOutput("Please enter data in all the input fields");
      return;
    }
    let newDOB = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < newDOB.length; i++) {
      sum = sum + parseInt(newDOB[i]);
    }
    if (parseInt(sum % number) === 0)
      setOutput("Yay! Your birth date is lucky");
    else setOutput("Sorry! Your birth date is unlucky");
  }
  return (
    <div>
      <h1>Is your birth date lucky?</h1>
      <h4> Check if your Birthday is lucky or not</h4>
      <h6>No data is stored. We respect user priavcy</h6>
      <label for="dob">Date of Birth</label>
      <br />
      <input
        type="date"
        name="dob"
        required
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <br />
      <label for="number">Enter your lucky number</label>
      <br />
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

      <footer>
        <ul class="footer-list">
          <li>
            <a class="links" href="/" target="_blank">
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a class="links" href="/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a class="links" href="/" target="_blank">
              <FaDiscord />
            </a>
          </li>
          <li>
            <a class="links" href="/" target="_blank">
              <CgWebsite />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
