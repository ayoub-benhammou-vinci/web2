import { useState } from 'react'

interface TitleProps {
    title: string;
    message: string;
}

const ClickCounter = ({title, message} : TitleProps) => {

    const [count, setCount] = useState(0);

    return (
        <div className="card">
        <h2>{title}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{count >= 10 ? message : ''}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    )
}

export default ClickCounter;

