import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Tailwind from "./Components/Tailwind/Tailwind";
import StyledComponent from "./Components/StyledComponent/StyledComponent";
import background from "./assets/monster-hunter.jpg";
import './App.css'
import { useState } from "react";

function Main() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")

  return (
    <div className='relative flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${background})`}}>
      <div className="flex flex-col justify-between min-w-2xs min-h-64">
        <div className="flex flex-col justify-center items-center bg-white/70 p-8 rounded-lg shadow-lg" id="box">
          <h1 className="text-4xl">Tailwind x Styled Component</h1>
          <h3 className="text-2xl">By Marcelo Pozzobon</h3>
        </div>
        <div className="" id="options-container">
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Digite algum usuário GitHub" onChange={(e) => {
            setUsername(e.target.value)
          }} />
          <div className="flex justify-around mt-3" id="options">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/tailwind", { state: { username: {username} } })}>Tailwind</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/styledComponent", { state: { username: {username} } })}>Styled Component</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/styledComponent" element={<StyledComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
