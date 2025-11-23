import React from 'react'
import Sidebar from './components/Sidebar'
import ProjectAdder from './components/ProjectAdder'
import Default from './components/Default'
import { useState } from 'react'

const App = () => {

  const [showProjectAdder, setShowProjectAdder] = useState(false);

  return (
    <div className="flex flex-row" >
      <Sidebar setShowProjectAdder={setShowProjectAdder} />
      {showProjectAdder ? <ProjectAdder setShowProjectAdder={setShowProjectAdder} /> : <Default setShowProjectAdder={setShowProjectAdder} />}
    </div>
  )
}

export default App
