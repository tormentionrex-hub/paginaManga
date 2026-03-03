import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Mangas from '../pages/Mangas/Mangas'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import DashboardAdmin from '../pages/Admin/DashboardAdmin'

const Routing = () => {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangas" element={<Mangas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  )

}

export default Routing
