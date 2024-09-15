import { useState } from 'react'
import './App.css'
import GridLayout from './components/GridLayout'
import GridColorSequence from './components/GridColorSequence'

function App() {
  return (
    <>
      <h2>Color Sequence Game</h2>
      
      <i>This is the correct sequence:</i>
      <GridColorSequence /><br/>
      <GridLayout />
    </>
  )
}

export default App