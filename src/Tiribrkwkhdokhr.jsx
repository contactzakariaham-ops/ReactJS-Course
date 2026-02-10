import React from 'react'
import { useState } from 'react'


function Tiribrkwkhdokhr() {
    const [tiribrkwkhdokhr , settiribrkwkhdokhr] = useState(0)
    return (
        <>
        <h1>tiribrkwkhdokhr</h1>
        <button onClick={() => settiribrkwkhdokhr((tiribrkwkhdokhr) => tiribrkwkhdokhr + 100)}>
          click me {tiribrkwkhdokhr}
        </button>
        </>
    )
}
export default Tiribrkwkhdokhr