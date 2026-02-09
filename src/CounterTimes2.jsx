import React from 'react'
import { useState } from 'react'

function CounterTimes2() {
  
    const [count2, setCount2] = useState(0)
  
    return (
    <>
    
      <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>

    </>
  )
}

export default CounterTimes2