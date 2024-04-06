import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Sidenav from './component/Sidenav'
import Main from './component/Main'                       
import WorkItem from './component/WorkItem'
import Work from './component/Work'
import Project from './component/Project'
import Contact from './component/Contact'
// import Howler from './component/Howler'

function App() {
  

  return (
   <div>
    <Sidenav/>
    <Main/>
    <Work/>
    <Project/>
    {/* <Howler/> */}
    <Contact/>

   </div>
  )
}

export default App
