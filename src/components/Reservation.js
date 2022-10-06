import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons" 

const Reservation = () => {
  return (
    <article className="article-reserve">
      <div className="container-reservation">
        <div className="description-reservation">
          <h3 className="title-reservation">RESERVA CON NOSTROS</h3>
          <p className="paragraph-reservation">Reserva tu visita con tiempo. Te confirmaremos tu reserva vía email.</p>
        </div>
        <form>
          <div className="select">
            <label htmlFor="number-persons"></label>
            <select name="number-persons" id="number-persons">
              <option disabled>Selecciona una cantidad</option>
              <option defaultValue="1">1 Persona</option>
              <option defaultValue="2">2 Personas</option>
              <option defaultValue="3">3 Personas</option>
              <option defaultValue="4">4 Personas</option>
              <option defaultValue="5">5 Personas</option>
              <option defaultValue="6">6 Personas</option>
            </select>
          </div>
          <div>
            <p className="paragraph-reserve">PARA EL</p>
          </div>
          <div>
          <label htmlFor="date-reservation"></label>
            <input type="date" name="date-reservation" id="date-reservation"/>
          </div>
          <div>
            <p className="paragraph-reserve">A LAS</p>
          </div>
          <div className="select">
            <label htmlFor="hour-reservation"></label>
            <select name="hour-reservation" id="hour-reservation">
              <option>Selecciona una hora</option>
              <option defaultValue="9:00">9:00 AM</option>
              <option defaultValue="9:30">9:30 AM</option>
              <option defaultValue="10:00">10:00 AM</option>
              <option defaultValue="10:30">10:30 AM</option>
              <option defaultValue="11:00">11:00 AM</option>
              <option defaultValue="11:30">11:30 AM</option>
              <option defaultValue="12:00">12:00 PM</option>
              <option defaultValue="12:30">12:30 PM</option>
              <option defaultValue="1:00">1:00 PM</option>
              <option defaultValue="1:30">1:30 PM</option>
              <option defaultValue="2:00">2:00 PM</option>
              <option defaultValue="2:30">2:30 PM</option>
              <option defaultValue="3:00">3:00 PM</option>
              <option defaultValue="3:30">3:30 PM</option>
              <option defaultValue="4:00">4:00 PM</option>
              <option defaultValue="4:30">4:30 PM</option>
              <option defaultValue="5:00">5:00 PM</option>
              <option defaultValue="5:30">5:30 PM</option>
              <option defaultValue="6:00">6:00 PM</option>
              <option defaultValue="6:30">6:30 PM</option>
              <option defaultValue="7:00">7:00 PM</option>
              <option defaultValue="7:30">7:30 PM</option>
              <option defaultValue="8:00">8:00 PM</option>
              <option defaultValue="8:30">8:30 PM</option>
              <option defaultValue="9:00">9:00 PM</option>
            </select>
          </div>
          <div className="container-fullmenu" type="submit">
            <div className="btn-fullmenu" to="/menu">
              Reservar
              <span className="arrow-fullmenu">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>    
            </div>
          </div>
        </form>
      </div>
    </article>
  )
}

export default Reservation