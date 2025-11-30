import React from 'react'
import { useRef, useState } from 'react'
import Task from './Task.jsx'

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

const Project = ( { title, description, dueDate, removeProject }) => {

  const [tasks, setTasks] = useState([]);

  const newTask = useRef();

  const addTask = () => {
    if (!newTask.current.value) {
      alert("Task name is required");
      return;
    }

    const task = {
      name: newTask.current.value,
      id: newTask.current.value + Date.now()
    };

    setTasks(prevTasks => ([...prevTasks, task]));

    newTask.current.value = "";
  }

  const removeTask = (taskID) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskID));
  }

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col">
      <section className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-stone-700 mt-5 ml-4 mb-2 md:text-4xl lg:text-5xl">{title}</h1>
        <button className="mt-5 mr-4 text-stone-500 text-xl cursor-pointer md:text-2xl lg:text-3xl" onClick={() => removeProject(title)}>Delete</button>
      </section>
      <p className="text-lg text-stone-600 ml-4 mb-5 md:text-xl lg:text-2xl">{formatDate(dueDate)}</p>
      <p className="text-lg mb-3 ml-4 md:text-xl lg:text-2xl">{description}</p>
      <hr className="text-stone-500 h-px mx-4" />
      <h2 className="text-2xl font-semibold text-stone-700 mt-5 ml-4 mb-2">Tasks</h2>
      <section className="flex flex-row items-center mb-4 text-lg md:text-xl lg:text-2xl">
        <input ref={newTask} id={title} type="text"  className="bg-stone-400 rounded-md p-1 ml-4 text-stone-300 focus:outline-0 w-4/7 max-w-2xl md:max-w-2/5 lg:max-w-1/4" />
        <button className="p-1 px-3 text-stone-600 ml-2 cursor-pointer" onClick={addTask}>Add Task</button>
      </section>
      <div className="flex flex-col mt-4 mb-10 ml-4 gap-3">
        {tasks.map(task => (
          <Task key={task.id} name={task.name} removeTask={() => removeTask(task.id)} />
        ))}
      </div>
    </div>
  )
}

export default Project
