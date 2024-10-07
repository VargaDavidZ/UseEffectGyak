import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/headerComp'
import 'bootstrap/dist/css/bootstrap.min.css'
import { VeszelyeztetettAllatfajok } from './components/Veszelyeztetett_allatfajok_Comp'
import { KornyezetVedelem } from './components/KornyezetVedelemComp'


function App() {


  return (
    <>

      <Header></Header>

      <main className='container m-5'  >
        <VeszelyeztetettAllatfajok></VeszelyeztetettAllatfajok>

        <KornyezetVedelem></KornyezetVedelem>

      </main>


    </>
  )
}

export default App
