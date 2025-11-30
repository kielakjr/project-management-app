import React from 'react'

const Task = ( { name, removeTask }) => {
  return (
    <div className="flex flex-row justify-between p-4 bg-stone-200 rounded-md w-9/10 max-w-2xl md:max-w-1/2 lg:max-w-1/3 md:text-lg lg:text-xl">
      <p>{name}</p>
      <button className="text-stone-500 text-lg cursor-pointer" onClick={removeTask}>Delete</button>
    </div>
  )
}

export default Task
