import React from 'react'
import Sidebar from './components/Sidebar'
import ProjectAdder from './components/ProjectAdder'
import Default from './components/Default'
import { useState } from 'react'

const App = () => {

  const setDefaultProject = () => {
    setProject(projects.default);
  }

  const setAdder = () => {
    setProject(projects.adder);
  }

  const addProject = (project) => {
    setProjects(prev => ({
      ...prev,
      [project.id]: project.component
    }));
    setProject(project.component);
  }

  const removeProject = (projectId) => {
    setProjects(prev => {
      const updated = { ...prev };
      delete updated[projectId];
      return updated;
    });
    setProject(projects.default);
  }

  const [projects, setProjects] = useState({
    default: <Default setAdder={setAdder} />,
    adder: <ProjectAdder setDefaultProject={setDefaultProject} addProject={addProject} removeProject={removeProject} />
  });

  const [project, setProject] = useState(projects.default);

  return (
    <div className="flex flex-row" >
      <Sidebar setAdder={setAdder} projects={projects} setProject={setProject} />
      {project}
    </div>
  )
}

export default App
