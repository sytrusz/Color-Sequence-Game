import { useState } from 'react'
import './App.css'
import GridLayout from './components/GridLayout'
import GridColorSequence from './components/GridColorSequence'

function App() {
  return (
    <>
      <h2>Color Sequence Game</h2>
      <GridColorSequence /><br/>
      <GridLayout />
    </>
  )
}

export default App