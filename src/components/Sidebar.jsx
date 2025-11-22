import React from 'react'

const Sidebar = () => {
  return (
    <div className="h-screen w-1/4 bg-stone-900 fixed rounded-r-lg flex flex-col">
      <h1 className="text-white ml-3 text-2xl font-bold p-4">Your Projects</h1>
      <button className="w-auto bg-stone-600 p-1 rounded-xl mx-5 text-sm text-zinc-400 cursor-pointer">+Add Project</button>
    </div>
  )
}

export default Sidebar
