import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import img1 from './assets/download.jpg'
import img2 from './assets/image.png'

function App() {

  let myObj = {
    username : "Ishitva",
    age : 23
  }

  let newArr =  [1,2,3] 

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">
        Tailwind is working
      </h1>
      <Card name = "NewDay" image = {img1}/>     
      <Card name = "The Weekend" image = {img2}/>
    </>
    
  )
}

export default App
