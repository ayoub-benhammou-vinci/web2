import React, { useState } from 'react';
import RandomDog from '../Dog/RandomDog';
import './App.css'; // Assurez-vous d'importer le fichier CSS

function App() {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active);
  }

  console.log("Active : ", active);

  return (
    <>
      <div className="container">
        <div className="random-dog"><RandomDog/></div>
        <div className="random-dog"><RandomDog/></div>
        <div className="random-dog"><RandomDog/></div>
      </div>
    </>
  )
}

export default App;
