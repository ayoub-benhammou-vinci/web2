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
        <div className="random-dog"><RandomDog key={`${active}1`}/></div>
        <div className="random-dog"><RandomDog key={`${active}2`}/></div>
        <div className="random-dog"><RandomDog key={`${active}3`}/></div>
      </div>
      <div className="submit-container">
        <input type="submit" value="Rafraichir" onClick={handleSetActive}/>
      </div>
    </>
  )
}

export default App;
