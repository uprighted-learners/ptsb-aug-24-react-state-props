import { useState } from 'react'
import './App.css'
import Count from './components/Count/Count'
import Auth from './components/Auth/Auth'
import ShowData from './components/ShowData/ShowData'

function App() {

  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [showCount, setShowCount] = useState(false)

  function handleField() {
    if (showCount) {
      return "Hide Count"
    } else {
      return "Show Count"
    }
  }

  return (
    <>
      <button onClick={() => setShowCount(!showCount)}>{handleField()}</button>
      {showCount ? <Count count={count} setCount={setCount} /> : null}
      <Auth email={email} pwd={pwd} setEmail={setEmail} setPwd={setPwd} />
      <ShowData email={email} pwd={pwd} />
      {count % 2 === 0 ? ": by zero" : "not : by 0"}
    </>
  )
}

export default App
