import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(0)

  function addValue () {
    if(count <20){
      count = count+1
      setCount(count)
      console.log(count)
    }else{
      alert("Max Value Reached")
    }
      
  }

  function removeValue(){
    if(count >0){
      count = count-1
      setCount(count)
      // console.log(count)
    }else{
      alert("Min Value Reached cannot Remove Further")
    }
  }

  return (
    <>
    
      <div>
        <span>
          <button
          onClick={removeValue}
          >
          -
          </button>
        </span>
        Counter Value: {count}
        <span>
          <button onClick={addValue}>
            +
          </button>
        </span>
      </div>
    </>
  )
}

export default App
