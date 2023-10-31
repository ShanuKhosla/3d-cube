import React from 'react'
import { Route, Routes } from 'react-router'
import Cubecontainer from './components/Cubecontainer'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/cube' element={<Cubecontainer/>} />
      </Routes>
    </div>
  )
}

export default App