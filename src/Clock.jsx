import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Set date value in state every second to current date and time
    // Save setInterval timer ID in class variable for teardown in another class method

    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Teardown setInterval timer with timer ID saved as class variable
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    // Render date value that is stored in state
    <p>
      {`${props.timeZone}: ${date.toLocaleString("en-GB", {
        timeZone: props.timeZone,
      })}`}
    </p>
  );
}
