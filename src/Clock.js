import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function() {
      clearInterval(intervalID)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
