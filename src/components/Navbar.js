import { NavLink } from "react-router-dom"
import LogoCafeteria from "../images/logo.png"

const Navbar = () => {
  return (
      <div className="container-navbar">
        <nav>
          <NavLink className="nav-link" to="/">Inicio</NavLink>
          <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
        </nav>
        <div>
          <NavLink to="/">
            <img className="logo" src={LogoCafeteria} alt="Cafe Recontre"/>
          </NavLink>
        </div>
        <nav>
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
          <NavLink className="nav-link" to="/menu">Menú</NavLink>
        </nav>
      </div>
  )

}

export default Navbar