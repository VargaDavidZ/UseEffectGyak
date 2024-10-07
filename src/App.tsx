import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/headerComp'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"

import { VeszelyeztetettAllatfajok } from './components/Veszelyeztetett_allatfajok_Comp'
import { KornyezetVedelem } from './components/KornyezetVedelemComp'
import { FenntarthatosagExport } from './components/fenntarthatosagComp'
import { Fontos } from './components/fontosComp'
import { MyFooter } from './components/myFooterComp'


function App() {


  return (
    <>

      <Header></Header>

      <main className='container my-4'  >
        <VeszelyeztetettAllatfajok></VeszelyeztetettAllatfajok>

        <KornyezetVedelem></KornyezetVedelem>

        <FenntarthatosagExport></FenntarthatosagExport>

        <Fontos></Fontos>



      </main>

      <MyFooter></MyFooter>


    </>
  )
}

export default App
