import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './StandardReactCounter.css'
import Timer from './Timer'
import CounterTimes2 from './CounterTimes2'
import Tiribrk from './tiribrk'
import Tiribrkwkhdokhr from './Tiribrkwkhdokhr'
import yacinechbab from './assets/yacinechbab.png'


function StandardReactCounter() {


       const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <a href="https://www.instagram.com/yacine.hmdn?igsh=ZXVscWdramRkZnJx" target="_blank">
          <img src={yacinechbab} className="logo" alt="Yacine Chbab logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>LKHFIF + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <CounterTimes2 />

        <div>

          <Timer />

        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Tiribrk />
      <Tiribrkwkhdokhr />
    </>
  )
} export default StandardReactCounter