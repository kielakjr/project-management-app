import React from 'react'
import { GrNotes } from "react-icons/gr";

const Default = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <GrNotes className="mt-20 mb-5 size-20 md:size-35 text-stone-700" />
      <h1 className="text-stone-700 font-semibold text-2xl mb-4">No Project Selected</h1>
      <h2 className="text-stone-600 text-xl mb-2 text-center mx-1">Select a project or get started with new one</h2>
      <button className="w-auto p-3 bg-stone-600 rounded-xl mx-5 text-base text-zinc-400 cursor-pointer">Create new project</button>
    </div>
  )
}

export default Default
