import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/menu">Nuestro Menú</NavLink>
    </nav>
  )
}

export default Navbar