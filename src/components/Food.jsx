import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'

function Food() {
  const [favFood, setFavFood] = useState("Fries"); 
  const [showFood, setShowFood] = useState(true)

  useEffect(() => {
    console.log("Component Mounted")

    return () => {
      console.log("Component Unmounted")
    }
  },[])

  return (
    <div>
      <br></br>
      {showFood? <h6>{favFood}</h6> : <h6>No Food Shown</h6>}
      <Button variant="danger" onClick={() => setShowFood(!showFood)}>Click Me</Button>
    </div>
  )
}

export default Food