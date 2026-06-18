import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">

      {/* Logo / Name */}
      <span className="text-xl font-bold text-blue-400">My Portfolio</span>

      {/* Links */}
      <ul className="flex gap-6 list-none m-0 p-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar