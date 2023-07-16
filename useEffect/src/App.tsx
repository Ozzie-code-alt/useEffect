
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
function App() {
  
const [value, setValue] = useState(0)
const [oldIncrement, setIncrementCount] = useState(0); // this seperates it
let incrementCount = ()=>{
  setValue(preValue => preValue +1 )
  setIncrementCount(oldValue => oldValue + 1)
}



useEffect(()=>{
  console.log("Number " + value)
}, [oldIncrement])


  return (
    <>
      <button className="btn btn-primary"onClick={() => setValue(preValue => preValue - 1)} >Decrement</button>
      <span>{value}</span>
      <button className="btn btn-secondary" onClick={incrementCount}>Increment</button>
   
   
    </>
  )
}

export default App
