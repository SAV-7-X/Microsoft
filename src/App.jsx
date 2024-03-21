import { useState } from 'react';

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
