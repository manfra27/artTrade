import React, { useState } from 'react'
import './App.css'
import Shop from './shop.jsx'
import Gallery from './gallery.jsx'

function App() {

  const [directory, setDirectory] = useState("home");

  const handleDirectory = (newDirectory) => {
    setDirectory(newDirectory);
  }

  return (
    <div className="grid">
      <h1>Valentinas Portfolio</h1>


      {
        directory === "home" ? (
          <>
            <button onClick={() => handleDirectory("shop")}>shop</button>
            <button onClick={() => handleDirectory("gallery")}>gallery</button>
            <button >exhibitions</button>
            <button >about</button>
            <button >contact</button>
            <button >mission</button>
            <button >vision</button>
          </>
        ) : (<></>)
      }
      {
        directory === "shop" ? (
          <>
            <button onClick={() => handleDirectory("home")}>home</button>
            <Shop />
          </>
        ) : (<></>)
      }
      {
        directory === "gallery" ? (
          <>
            <button onClick={() => handleDirectory("home")}>home</button>
            <Gallery />
          </>
        ) : (<></>)
      }
      <p>c-copyright 2025</p>
    </div >
  )
}

export default App




