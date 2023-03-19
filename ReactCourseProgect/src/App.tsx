import React, { useState } from 'react'

import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { NotFound } from './pages/NotFoundPage'
import { AboutUs } from './pages/About us/AboutUs'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
