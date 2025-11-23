import React from 'react'
import Sidebar from './components/Sidebar'
import ProjectAdder from './components/ProjectAdder'

const App = () => {
  return (
    <div className="flex flex-row" >
      <Sidebar />
      <ProjectAdder />
    </div>
  )
}

export default App
