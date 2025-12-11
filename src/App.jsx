import { useState } from 'react'
import './App.css'

// components
import ProductForm from './components/ProductForm'
import ProductsList from "./components/ProductsList"

function App() {
 
  const [showProducts, setShowProducts] = useState(false)
 
  const listProducts = () => {
    setShowProducts(true)
  }

  const backFunction = () => {
    setShowProducts(false)
  }

  return (
    <div className="app">
        <div className="formContainer">
          {!showProducts ? <ProductForm callback={listProducts}/> : <ProductsList callback={backFunction}/>}
        </div>
    </div>
  )
}

export default App
