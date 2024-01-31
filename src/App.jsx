import { useState } from 'react'
import PRODUCTS from "./components/data"
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'

function App() {
 

  return (
    <>
    <FilterableProductTable products = {PRODUCTS}/>
    </>
  )
}

export default App
