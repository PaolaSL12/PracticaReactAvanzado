import React from 'react'
import { useTimer } from '../../customHooks/Timer'


const Timer = () => {

  const timer = useTimer()

  return (
    <div>{timer.toLocaleTimeString()}</div>
  )
}

export default Timer