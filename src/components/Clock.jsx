import React, {useState, useEffect} from 'react'

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


  const clockstyle = {
    color: "black",
    fontWeight: "bold",
  };

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleString("en-GB", {timeZone: timezone}));
    }, 1000);
  });

  return (
    <>
      <div className='clocks' style={clockstyle}>
        {clock}
      </div>
    </>
  );
}

export default Clock