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

  if (loading) return <p>Loading skills...</p>
  if (error)   return <p>{error}</p>

  return (
    <div>
      <h1>Skills</h1>
      {skills.map(skill => (
        <div key={skill.id}>
          <h2>{skill.name}</h2>
          <p>Category: {skill.category}</p>
          <p>Proficiency: {skill.proficiency}%</p>
        </div>
      ))}
    </div>
  )
}

export default Skills