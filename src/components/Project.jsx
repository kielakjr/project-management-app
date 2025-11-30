import React from 'react'

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

const Project = ( { title, description, dueDate, removeProject }) => {
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col">
      <section className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-stone-700 mt-5 ml-4 mb-2">{title}</h1>
        <button className="mt-5 mr-4 text-stone-500 text-xl cursor-pointer" onClick={() => removeProject(title)}>Delete</button>
      </section>
      <p className="text-lg text-stone-600 ml-4 mb-5">{formatDate(dueDate)}</p>
      <p className="text-lg mb-3 ml-4">{description}</p>
      <hr className="text-stone-500 h-px mx-4" />
      <h2 className="text-2xl font-semibold text-stone-700 mt-5 ml-4 mb-2">Tasks</h2>
      <section>
        <input type="text"  className="bg-stone-400 rounded-md p-1 ml-4 text-stone-300 focus:outline-0 w-3/7 max-w-2xl md:max-w-1/3 lg:max-w-1/4" />
        <button className="p-1 px-3 text-lg text-stone-600 ml-2 cursor-pointer">Add Task</button>
      </section>
    </div>
  )
}

export default Project
