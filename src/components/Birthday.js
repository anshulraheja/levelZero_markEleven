import { useState } from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import "./Birthday.css";

export default function Birthday() {
  const [dob, setDOB] = useState();
  const [number, setNumber] = useState();
  const [output, setOutput] = useState();
  const date = new Date().getFullYear();
  const ERROR_OUTPUT = "Please enter data in all the input fields";
  function checkLuckyBday() {
    if (
      dob === undefined ||
      dob === "" ||
      number === undefined ||
      number === ""
    ) {
      console.log(number);
      setOutput(ERROR_OUTPUT);
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
    <>
      <div className="container">
        <h1>Is your birth date lucky?</h1>
        <h4> Check if your Birthday is lucky or not</h4>
        <p className="pop-alert">No data is stored. We respect user priavcy</p>
        <label htmlFor="dob">Date of Birth</label>
        <br />
        <input
          type="date"
          name="dob"
          required
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        <br />
        <label htmlFor="number">Enter your lucky number</label>
        <br />
        <input
          type="number"
          name="number"
          autoComplete="off"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn" onClick={checkLuckyBday}>
          Check
        </button>
        <div className="output-container">
          <p
            className={output === ERROR_OUTPUT ? "error-msg output" : "output"}
          >
            {output}
          </p>
        </div>
      </div>
      <footer>
        <p>© | {date} | anshulraheja</p>
        <ul className="footer-list">
          <li>
            <a href="https://github.com/anshulraheja" target="_blank">
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anshul-raheja/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/channels/anshulraheja#3744"
              target="_blank"
            >
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/anshulrahejaa" target="_blank">
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
