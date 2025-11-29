import React from 'react'

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

const Project = ( { title, description, dueDate, removeProject }) => {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <section className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold text-stone-700 mt-5 ml-4 mb-2">{title}</h1>
        <button className="mt-5 mr-4 text-stone-500 text-xl cursor-pointer" onClick={() => removeProject(title)}>Delete</button>
      </section>
      <p className="text-md text-stone-600 ml-4 mb-5">{formatDate(dueDate)}</p>
      <p className="text-lg mb-2 ml-4">{description}</p>
    </div>
  )
}

export default Project
