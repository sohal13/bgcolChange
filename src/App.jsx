
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='w-full h-screen'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2;'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-3xl text-white shadow-sm'
              style={{ backgroundColor: "Red" }}>Red</button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-3xl text-white shadow-sm'
              style={{ backgroundColor: "green" }}>Green</button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-3xl text-white shadow-sm'
              style={{ backgroundColor: "black" }}>Black</button>
            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-3xl text-white shadow-sm'
              style={{ backgroundColor: "blue" }}>Blue</button>
            <button
              onClick={() => setColor("pink")}
              className='outline-none px-4 py-1 rounded-3xl text-black shadow-sm'
              style={{ backgroundColor: "pink" }}>Pink</button>
            <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 py-1 rounded-3xl text- shadow-sm'
              style={{ backgroundColor: "yellow" }}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
