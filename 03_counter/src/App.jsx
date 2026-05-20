import { useState } from 'react'  //this is how we import hooks
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //what useState hook does that is changes the state of all the places where its variable(in this case counter) is used 
  //useState hook returns a array of [variable, function], counter is variable and setCounter is function
  let [counter, setCounter] = useState(0)

  // let counter = 0

  //written the function to increase the counter, does its job quite well but wont change anything on ui, for that we will have to use hooks
  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter) //or setCounter(counter + 1) then we dont write the above line
    }
    
    console.log("add clicked", counter)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    console.log("remove clicked", counter)
  }
  
  return (
    <>
    <h1>Chai aur react</h1>
    <h2> Counter value : {counter} </h2>

    <button onClick = {addValue}>Add value</button>
    <br></br>
    <button onClick = {removeValue}>Remove value</button>

    <p>Value of counter has been updated to {counter}</p>
    </>
  )
}

export default App
