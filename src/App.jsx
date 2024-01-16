import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailConteiner } from './components/ItemDetailConteiner'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        {/* <ItemListContainer/> */}
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/category/:id' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailConteiner/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
