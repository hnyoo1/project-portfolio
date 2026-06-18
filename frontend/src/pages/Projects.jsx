import { useState, useEffect } from 'react'
import api from '../services/api'

function Projects() {
  const [projects, setProjects] = useState([])   // store projects
  const [loading, setLoading]   = useState(true)  // loading state
  const [error, setError]       = useState(null)  // error state

  useEffect(() => {
    // Fetch projects from Laravel API when component loads
    api.get('/projects')
      .then(response => {
        setProjects(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError('Failed to load projects')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading projects...</p>
  if (error)   return <p>{error}</p>

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Tech Stack: {project.tech_stack}</p>
          {project.github_url && (
            <a href={project.github_url} target="_blank">GitHub</a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Projects