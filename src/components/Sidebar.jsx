import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Sidebar = ( { setShowProjectAdder }) => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
    <div className={`h-screen ${isOpen ? 'w-1/3 md:w-1/5' : 'w-auto'} bg-stone-900 rounded-r-lg flex flex-col sticky top-0 left-0`}>
      <button className='cursor-pointer pr-2' onClick={ () => {setIsOpen(prev => !prev)}}><FaBars className="text-white size-7 my-1 ml-1"  /></button>
      {isOpen &&
        <>
          <h1 className="text-white text-lg md:text-2xl font-bold p-4">Your Projects</h1>
          <button className="w-auto bg-stone-600 p-1 rounded-xl mx-2 text-sm text-zinc-400 cursor-pointer" onClick={ () => {setShowProjectAdder(true)}}>+Add Project</button>
        </>
      }
    </div>
    </>
  )
}

export default Sidebar
