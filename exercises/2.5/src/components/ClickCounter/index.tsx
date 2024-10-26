import { useState } from 'react'
import './clickCounter.css'


interface TitleProps {
    title: string;
    messageChallenge?: string;
    messageClick?: string;
}

const ClickCounter = ({
  title, 
  messageChallenge="Master", 
  messageClick="Click"} : TitleProps) => {

    const [count, setCount] = useState(0);
    const [clickMessage, setClickMessage] = useState(false);

    return (
        <div className="card">

        <h2>{title}</h2>

        <p>{clickMessage ? <p>{messageClick}</p> : null}</p>

        <button onClick={() => setCount((count) => count + 1)}
          onMouseEnter={() => setClickMessage(true)}
          onMouseLeave={() => setClickMessage(false)}>
          count is {count}
        </button>

        <p>{count >= 10 ? <p>{messageChallenge}</p> : ''}</p>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

      </div>
    )
}

export default ClickCounter;

