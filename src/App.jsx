import { useState } from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//Stlye
import './css/bootstrap.min.css'
import './css/style.css'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='*' element={<p>404 NOT FOUND</p>} />
        </Routes>
        <ItemDetailContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
