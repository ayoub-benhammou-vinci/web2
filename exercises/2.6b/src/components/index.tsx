
import { useState } from 'react'
import './App.css'
import SwitchColorBox from './SwitchColorBox'

function App() {
  const [text, setText] = useState("");

  return (
    <>
    <h2>Change your color</h2>
      <SwitchColorBox/>
      <SwitchColorBox/>
      <SwitchColorBox/>

      <div>
          <p>Your text will appear here : {text}</p>
      </div>

      <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}>
      </input>
      
    </>

  )
}

export default App
