import { useState } from 'react'
import './App.css'
import Count from './components/Count/Count'
import Auth from './components/Auth/Auth'
import ShowData from './components/ShowData/ShowData'

function App() {

  const [ count, setCount ] = useState(0)
  const [ email, setEmail ] = useState("")
  const [ pwd, setPwd ] = useState("")

  return (
    <>
      <Count count={count} setCount={setCount} />
      <Auth email={email} pwd={pwd} setEmail={setEmail} setPwd={setPwd} />
      <ShowData email={email} pwd={pwd} />
    </>
  )
}

export default App
