import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la tienda de Mates R&C"}/>
    </>
  )
}

export default App
