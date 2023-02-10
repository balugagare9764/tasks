import { useState } from 'react'
import NavBar from './comonant/NavBar'
import { BrowserRouter, Routes,Route} from "react-router-dom"
import LoginFrom from './pages/LoginFrom'
import DataGrid from './pages/DataGridTable'

function App() {
 

  return (<>

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route   path='/' element={<LoginFrom />}/>
         <Route path='/data' element={<DataGrid/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
