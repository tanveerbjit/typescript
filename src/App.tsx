import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)
  let a:number ;
  a=5;
  console.log(a)

  return (
    <>
      <div>
        <Test/>
      </div>
    </>
  )
}

export default App
