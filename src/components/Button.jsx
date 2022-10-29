import React from 'react'

export default function Button({onClick}) {
  return (
    <div>
    <button onClick={onClick}>Add expense</button>
    {/* <button>{value}</button> */}
    </div>
  )
}
