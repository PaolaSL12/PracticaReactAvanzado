import { useEffect, useState } from "react";

export const useTimer = () => {

    const[timer, setTimer] = useState(new Date());

    useEffect(() => {

      const interval = setInterval(() => {
        setTimer(new Date())
      }, 1000);

      return () => clearInterval(interval)

    }, [])

    return timer
  
  }