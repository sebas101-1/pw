import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Body from './Body'
import Men from './Men'
import Frac from'./frac'
import './index.css'
function Main(){
  let [dark, setdark] = useState(false)
  function dClick(){
    setdark(!dark)
    console.log("Hi")
  }
  return(
    <>
    <App/>
    <Body/>
    <Men darkmode={false} DarkClick={dClick}/>
    <Frac/>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main/>)
