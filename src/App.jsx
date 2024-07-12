import { useState } from 'react'
import './App.css'
import Fills from './components/Fill'
import UserForm from './components/form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <UserForm/>
    {/* <Fills/> */}
     
    </>
  )
}

export default App
