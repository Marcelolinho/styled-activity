import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tailwind from "./Components/Tailwind/Tailwind";
import StyledComponent from "./Components/StyledComponent/StyledComponent";
import './App.css'

function Main() {
  const navigate = useNavigate()

  return (
    <main className='flex justify-center items-center'>
      <div className="flex justify-around">
        <div className="flex justify-center " id="box">
          <h1>Tailwind x Styled Component</h1>
          <h3>By Marcelo Pozzobon</h3>
        </div>
        <div className="flex" id="options">
          <button className="button" onClick={() => navigate("/tailwind")}>Tailwind</button>
          <button className="button" onClick={() => navigate("styledComponent")}>Styled Component</button>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/tailwind" element={ <Tailwind /> } />
        <Route path="/styledComponent" element={ <StyledComponent /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
