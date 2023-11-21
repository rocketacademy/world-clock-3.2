import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

function Clock(props) {

  const timezones = ["America/Los_Angeles", "Europe/London", "Asia/Singapore"];

  let timezone = "";
  if (props.title == "Singapore") {
    timezone = timezones[2];
  } else if (props.title == "London"){
    timezone = timezones[1];
  } else if ((props.title == "Los Angeles")) {
    timezone = timezones[0];
  }

  const [clock, setClock] = useState(new Date().toLocaleString('en-GB', { timeZone: timezone}));
  const [showClock, setShowClock] = useState(true);


  const clockstyle = {
    color: "black",
    fontWeight: "bold",
  };

  useEffect(() => {
    const tick = () => {
      setClock(new Date().toLocaleString("en-GB", {timeZone: timezone}));
    };
    
    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
    }
  });

  return (
    <>
      <div className="clocks" style={clockstyle}>
        {showClock ? clock : <h6>Clock Hidden</h6>}
      </div>
      <Button variant="primary" onClick={() => setShowClock(true)}> 
        Show Clock
      </Button>
      <Button variant="danger" onClick={() => setShowClock(false)}>
        Hide Clock
      </Button>
    </>
  );
}

export default Clock