import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const ClosureTask = ({ history }) => {

  const [userArray, setUserArray] = useState([]);

  const getDifference = (array) => {
    if (array !== null) {
      const iterableArr = [...array];
      let idx = -1;
      return function () {
        if (idx === iterableArr.length - 2) {
          idx = 0
        } else {
          idx++
        }
        alert(`${iterableArr[idx + 1]} - ${iterableArr[idx]} = ${iterableArr[idx + 1] - iterableArr[idx]}`);
      }
    } else {
      alert("you must put an array");
    }
  }

  useEffect(() => {
    return getArrayFromPrompt();
  }, []);

  const getArrayFromPrompt = () => {
    const userInput = prompt("Put your array separated by whitespace");
    let validatedUserInput;
    if (userInput) {
      validatedUserInput = userInput.split(" ");
      setUserArray(validatedUserInput);
      getDifference(validatedUserInput);
    } else {
      alert("you must put an Array");
    }
  }

  return (
    <div className="closure-task">
      <img
        className="closure-task-bg"
        src="https://images.pexels.com/photos/512868/pexels-photo-512868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="green forest" />
      <div className="closure-task-box">
        <button
          className="button1"
          onClick={() => history.push('/')}>
          Logout
        </button>
      </div>
      <div className="closure-btns-box">
        <button
          className="button1 try-btn"
          onClick={() => { getArrayFromPrompt() }}>
          Try another Array
      </button>
        <button
          className="button1 next-btn"
          onClick={getDifference([...userArray])}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default ClosureTask;