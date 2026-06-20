import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0d0d20] border-b border-[#2a2a4a]">
      <span className="text-xl font-bold text-purple-400">🚀 CosmosView</span>
      <div className="flex gap-4">
        <NavLink to="/" end className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'text-purple-400 bg-[#1a1a3a]' : 'text-gray-400 hover:text-white hover:bg-[#1e1e3a]'}`
        }>
          Foto del Día
        </NavLink>
        <NavLink to="/mars" className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'text-purple-400 bg-[#1a1a3a]' : 'text-gray-400 hover:text-white hover:bg-[#1e1e3a]'}`
        }>
          Marte
        </NavLink>
        <NavLink to="/asteroids" className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'text-purple-400 bg-[#1a1a3a]' : 'text-gray-400 hover:text-white hover:bg-[#1e1e3a]'}`
        }>
          Asteroides
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar