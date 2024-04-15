import React, { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer'
import { useTimer } from './customHooks/Timer';
import Calculator from './components/Calculator/Calculator';

const App = () => {
      
  const timer = useTimer();

  console.log("montando");


  return (
    <>
    <Timer timer={timer}/>
    <Calculator/>
    </>
  )
}

export default App