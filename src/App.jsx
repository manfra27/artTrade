import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>artTrade</h1>
      <p>Menu: next exhibitions, gallery, about, </p>
      <p>next exhibitions: date, time, place, artists, pieces</p>
      <p>gallery: pieces, artists, rent piece</p>
      <p>rent piece: data entry like address..., digital contract, </p>
      <p>about: mission, vision, who, ...</p>
    </>
  )
}

export default App
