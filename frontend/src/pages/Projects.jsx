import { useState, useEffect } from 'react'
import api from '../services/api'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
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

  if (loading) return (
    <p className="text-center text-gray-400 mt-20">Loading projects...</p>
  )

  if (error) return (
    <p className="text-center text-red-400 mt-20">{error}</p>
  )

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-6">

      {/* Page Title */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          My <span className="text-blue-400">Projects</span>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between hover:bg-gray-700 transition"
            >
              {/* Project Info */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-blue-400 mb-4">
                  {project.tech_stack}
                </p>
              </div>

              {/* GitHub Link */}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-2"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects