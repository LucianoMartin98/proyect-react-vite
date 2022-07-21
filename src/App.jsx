import { useState } from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


//Stlye
import './css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Navbar/>
      <ItemListContainer/>


    </div>
  )
}

export default App
