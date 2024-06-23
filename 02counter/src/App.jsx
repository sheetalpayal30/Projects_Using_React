import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {

    //counter = counter + 1 
    if(counter > 19){
      counter=20;
    }
    else{
    setCounter(counter+ 1)
    }
  }

  const removeValue =()=>{
    if(counter < 1){
      counter = 0;
    }
    else{
    setCounter(counter -1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove value{counter}</button>
    </>
  )
}

export default App
