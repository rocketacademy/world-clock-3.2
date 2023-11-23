import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Timezone() {
  //5) useState to add each clicked timezone into an array
  const [currTimezones, setNewTimezone] = useState([]);
  const [remainderTimezones, deleteTimezones] = useState(currTimezones);
  useEffect(() => {
    console.log("Added to current timezones: ", currTimezones); //for debugging only
  }, [currTimezones]);

  //1) retrieve list of timezones
  const timezones = Intl.supportedValuesOf("timeZone");
  //2) map each timezone into a dropdown item
  const arrTimeZones = timezones.map((timezone) => (
    <Dropdown.Item
      onClick={() => handleTimezoneClick(timezone)} //3) make handleClick, pass an element, timezone into it
      key={timezone.id}
    >
      {timezone}
    </Dropdown.Item>
  ));
  //4) define handleClick's function
  const handleTimezoneClick = function (timezone) {
    setNewTimezone((anyArg) => [...anyArg, timezone]);
    // console.log("added to current timezones: ", currTimezones) // cant see the first time anything is added to current timezones...
  };

  const handleDeleteClick = function (x) {
    currTimezones.splice(x, 1);
    deleteTimezones(() => [...remainderTimezones]);
  };

  //6) map each timezone into a Clock component and assign to variable just like part 2 with dropdown list 
  let arrClocks = currTimezones.map((eachTimezone) => (
    <div key={eachTimezone.id}>
      <Clock key={eachTimezone.id} timeZone={eachTimezone} />
      <Button
        key={eachTimezone.id}
        onClick={() => handleDeleteClick(currTimezones.indexOf(eachTimezone))}
        variant="outline-danger"
      >
        Delete
      </Button>
    </div>
  ));

  return (
    <div>
      <Container>{arrClocks}</Container>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Add Clocks
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">{arrTimeZones}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Timezone;
