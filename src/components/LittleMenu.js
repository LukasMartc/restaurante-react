import { Link } from "react-router-dom"
import Coffee from "./Coffee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const LittleMenu = () => {
  return (
    <article className="container-littlemenu">
      <div className="littlemenu">
        <div className="desciption-littlemenu">
          <h3 className="title-littlemenu">NUESTRO MENÚ</h3>
          <p className="paragraph-littlemenu">Café Recontre es un lugar agradable en donde podrá disfrutar el mejor Café.</p>
        </div>
        <div className="types-coffee">
          <Coffee />
          <Coffee />
          <Coffee />
        </div>
        <div className="container-fullmenu">
          <Link className="btn-fullmenu" to="/menu">
            Full Menú
            <span className="arrow-fullmenu">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>    
          </Link>
        </div>
      </div>
    </article>
  )
}

export default LittleMenu