import { BrowserRouter, Routes, Route } from "react-router-dom"
import StandardReactCounter from "./StandardReactCounter"
import Timer from "./Timer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardReactCounter />} />
        <Route path="/Timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



