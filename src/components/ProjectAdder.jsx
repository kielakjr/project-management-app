import React from 'react'

const inputStyles = "bg-stone-400 border-b-2 rounded w-full max-w-4xl p-2 focus:outline-none focus:ring-2 focus:ring-stone-600 md:mx-auto mb-6";

const ProjectAdder = () => {
  return (
    <div className='w-4/5 left-1/5 text-lg text-stone-600 flex flex-col p-4 md:p-12 items-center h-screen overflow-y-auto mx-auto'>
      <div className="flex flex-row justify-end gap-4 mb-8 w-full max-w-4xl">
        <button className="cursor-pointer">Cancel</button>
        <button className='bg-stone-900 p-2 px-4 rounded-md text-stone-300 cursor-pointer'>Save</button>
      </div>
      <h1>TITLE</h1>
      <input className={inputStyles}  type="text" />
      <h1>DESCRIPTION</h1>
      <textarea className={inputStyles + " h-40"}  type="text" />
      <h1>DUE DATE</h1>
      <input className={inputStyles}  type="date" />
    </div>
  )
}

export default ProjectAdder
