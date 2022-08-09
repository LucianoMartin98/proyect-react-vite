import { useState } from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import CartWidget from './components/CartWidget'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestEventos from './components/TestEventos'

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
          <Route path='/categorias/:idCategoria' element={<ItemListContainer />} />
          <Route path='/detalle/:idItem' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<CartWidget />} />
          <Route path='/testeventos' element={<TestEventos/>} />
          <Route path='*' element={<p>404 NOT FOUND</p>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
