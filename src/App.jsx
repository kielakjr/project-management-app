import React from 'react'
import Sidebar from './components/Sidebar'
import ProjectAdder from './components/ProjectAdder'
import Default from './components/Default'

const App = () => {
  return (
    <div className="flex flex-row" >
      <Sidebar />
      <Default />
    </div>
  )
}

export default App
