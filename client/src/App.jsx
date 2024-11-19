import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-green-200 flex justify-center items-center'>
      <h1 className=' text-center text-2xl font-bold'>Hello</h1>
    </div>
  )
}

export default App
