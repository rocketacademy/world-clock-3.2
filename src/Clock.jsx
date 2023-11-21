import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <p>
        {props.timeZone}: {date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })}
      </p>
    </>
  );
}
