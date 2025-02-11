import { useState } from 'react'
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { colorPalettes } from "compositions/lib/color-palettes"
import './App.css'

function App() {
  const [room, setRoom] = useState<number | null>(0);
  // const [therapist, setTherapist] = useState<number | null>(0);

  const rooms: { [key: number]: string } = {
    1: "Room 1",
    2: "Room 2",
    3: "Room 3",
    4: "Room 4",
    5: "Room 5",
    6: "Room 6",
    7: "Room 7",
    8: "Room 8",
    9: "Room 9",
    10: "Room 10",
    11: "Room 11",
    12: "Room 12",
  };

  return (
    <Grid gap="6" direction="row">
      {Object.keys(rooms).map((key) => (
        <Button key={key} onClick={() => setRoom(parseInt(key))} size="xl">
          {rooms[parseInt(key)]}
        </Button>
      ))}
    </Grid>
  )
};

export default App
