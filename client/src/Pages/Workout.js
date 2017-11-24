import React from 'react'
import Timer from '../Components/Timer'

export default () => {
  return (
    <div>
      <p>Total Session Time:</p>
      <Timer />

      <p>Current Rest Time:</p>
      <Timer />
    </div>
  )
}
