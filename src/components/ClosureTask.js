import React from 'react'
import "../styles/App.css"

const ClosureTask = (props) => {
  return (
    <div className="closure-task">
      Hello World\
      <button onClick={() => props.history.push('/')}>Logout</button>
    </div>
  );
}

export default ClosureTask;