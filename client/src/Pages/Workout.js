import React from 'react'
import Timer from '../Components/Timer'

export default () => {
  return (
    <div>
      <p>Current Session:</p>
      <Timer />

      <p>Rest:</p>
      <Timer />
    </div>
  )
}
