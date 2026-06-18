import { useState, useEffect } from 'react'
import api from '../services/api'

function Skills() {
  const [skills, setSkills]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    api.get('/skills')
      .then(response => {
        setSkills(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError('Failed to load skills')
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <p className="text-center text-gray-400 mt-20">Loading skills...</p>
  )

  if (error) return (
    <p className="text-center text-red-400 mt-20">{error}</p>
  )

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          My <span className="text-blue-400">Skills</span>
        </h1>

        {/* Skills List */}
        <div className="flex flex-col gap-6">
          {skills.map(skill => (
            <div key={skill.id} className="bg-gray-800 rounded-lg p-6">

              {/* Skill Name and Proficiency Number */}
              <div className="flex justify-between mb-2">
                <h2 className="text-white font-semibold">{skill.name}</h2>
                <span className="text-blue-400 font-semibold">{skill.proficiency}%</span>
              </div>

              {/* Category */}
              <p className="text-gray-400 text-sm mb-3">{skill.category}</p>

              {/* Progress Bar */}
              <div className="bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills