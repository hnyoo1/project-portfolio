import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <span>My Portfolio</span>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar