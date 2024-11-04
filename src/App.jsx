import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/header.jsx";
import Vault from "./components/vault.jsx"

export default function App() {
  return (
    <>
      <Header/>
      <Vault/>
    </>
  )
}
