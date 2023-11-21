import Dropdown from 'react-bootstrap/Dropdown'

function Timezone(){
  // retrieve list of timezones
  const timezones = Intl.supportedValuesOf("timeZone");
  // map each timezone into a dropdown item
  const arrTimeZones = timezones.map((timezone) => (
    <Dropdown.Item
      onClick={() => handleTimezoneClick(timezone)}
      key={timezone.id}
    >
      {timezone}
    </Dropdown.Item>
  ));
  // log each time i click on a timezone
  const handleTimezoneClick = function (timezone) {
    console.log("timezone clicked: ", { timezone });
  };

  

  return(
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Add Clocks
      </Dropdown.Toggle>

<Dropdown.Menu className='dropdown-menu'>
  {arrTimeZones}
</Dropdown.Menu>

    </Dropdown>
  )
}



export default Timezone;