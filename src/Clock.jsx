import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  });
  return (
    <>
      <p>
        {date.toLocaleString("en-US", {
          timeZone: `${props.timezone}`,
          timeStyle: "full",
        })}
      </p>
    </>
  );
}
