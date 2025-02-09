import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './sidebar'
import Navbar from './Navbar'
import TodoList from './TodoInput'

function App() {
  return (
    <>
     <Navbar/>
    <TodoList/>
    </>
  )
}
