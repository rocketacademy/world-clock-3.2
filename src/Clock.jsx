// import logo from "/logo.png";
import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  return (
    <>
      <p>{date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })}</p>
    </>
  );
}
