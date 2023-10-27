// import required React hooks for this component, useState will implement state, where as useEffect facilitates implementation of LifeCycle methods
import { useState, useEffect } from "react";

export default function Clock(props) {
  // Initialise Component state to contain a "date" attribute with current date using the useState method.
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // useEffect implementation to execute code when the component loads
    // Set date value in state every second to current date and time
    // Save setInterval timerId in a variable for teardown later in the useEffect method
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // useEffect implemenation to tear down the interval saved in timerId
    return () => {
      // Teardown setInterval timer saved within the timerId variable
      clearInterval(timerId);
    };
  });

  return (
    // Render date value that is stored in state
    <p>{date.toString()}</p>
  );
}
