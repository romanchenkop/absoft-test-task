import React from 'react'

export const ProtectedRoute = (props) => {
  return (
    <div>
      <button onClick={() => {
        console.log(props.history)
      }}></button>
      Hello
    </div>
  )
}
