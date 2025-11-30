import React from 'react'
import { useRef } from 'react'
import Project from './Project.jsx'

const inputStyles = "bg-stone-400 border-b-2 rounded w-4/5 max-w-4xl p-2 focus:outline-none focus:ring-2 focus:ring-stone-600 md:mx-auto mb-6";

const ProjectAdder = ({ setDefaultProject, addProject, removeProject }) => {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {

    if (!title.current.value) {
      alert("Title is required");
      return;
    }

    if (!dueDate.current.value) {
      alert("Due Date is required");
      return;
    }

    const newProject = {
      id: title.current.value,
      component: (
        <Project
          title={title.current.value}
          description={description.current.value}
          dueDate={dueDate.current.value}
          removeProject={removeProject}
          key={title.current.value}
        />
      )
    };
    addProject(newProject);
  }

  return (
    <div className='w-full text-lg text-stone-600 flex flex-col items-center h-screen overflow-y-auto'>
      <div className="flex flex-row justify-end gap-4 mb-8 w-full max-w-4xl mt-2 mr-2">
        <button className="cursor-pointer" onClick={setDefaultProject}>Cancel</button>
        <button className='bg-stone-900 p-2 px-4 rounded-md text-stone-300 cursor-pointer' onClick={handleSave}>Save</button>
      </div>
      <h1>TITLE</h1>
      <input ref={title} className={inputStyles}  type="text" />
      <h1>DESCRIPTION</h1>
      <textarea ref={description} className={inputStyles + " h-40"}  type="text" />
      <h1>DUE DATE</h1>
      <input ref={dueDate} className={inputStyles}  type="date" />
    </div>
  )
}

export default ProjectAdder
