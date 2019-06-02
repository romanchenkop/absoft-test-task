import React, { useEffect } from 'react'
import "../styles/App.css"


const ClosureTask = ({ history }) => {
  useEffect(() => {
    return getArrayFromPrompt()
  }, [])

  const getArrayFromPrompt = () => {
    prompt("Put your array")
  }

  return (
    <div className="closure-task">
      <img className="closure-task-bg" src="https://images.pexels.com/photos/512868/pexels-photo-512868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="green forest" />
      <div className="closure-task-box">
        <button className="button1" onClick={() => history.push('/')}>Logout</button>
      </div>
    </div>
  );


}

export default ClosureTask;