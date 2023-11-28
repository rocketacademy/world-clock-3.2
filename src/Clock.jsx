import React, { useState, useEffect } from "react";

function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const makeTimeGoUp = setInterval(handleDate, 1000);
    return () => clearInterval(makeTimeGoUp);
  }, []);

  const handleDate = () => setDate(() => new Date());

  return (
    <>
      <p>{date.toLocaleString("en-GB", { timeZone: props.timeZone })}</p>
    </>
  );
}
export default Clock;
