import React, { useState } from 'react'
import './App.css'
import Shop from './shop.jsx'

function App() {

  const [directory, setDirectory] = useState("homepage");

  const handleDirectory = (newDirectory) => {
    setDirectory(newDirectory);
  }

  return (
    <div className="grid">
      <h1>Valentinas Portfolio</h1>
      <p>Menu: (next exhibitions, gallery, about, homepage, shop)</p>
      <p>next exhibitions: date, time, place, artists, pieces</p>
      <p>gallery: pieces, artists, rent piece</p>
      <p>rent piece: data entry like address..., digital contract, </p>
      <p>about: mission, vision, who, contact, </p>
      {
        directory === "homepage" ? (
          <button onClick={() => handleDirectory("shop")}>shop</button>
        ) : (<></>)
      }
      {
        directory === "shop" ? (
          <>
            <button onClick={() => handleDirectory("homepage")}>homepage</button>
            <Shop />
          </>
        ) : (<></>)
      }

    </div>
  )
}

export default App




