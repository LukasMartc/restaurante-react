import { Link } from 'react-router-dom'
import PictureCoffe1 from '../images/articulo-cafe1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const ArticleBlog = () => {
  return (
    <article>
        <div className='article-blog'>
            <div className='container-featured'>
                <h3 className='featured-title'>DESTACADOS</h3>
            </div>
            <div className='content-featured'>
                <div className='container-imgcoffe'>
                    <FontAwesomeIcon className='next-image' icon={faChevronLeft} />
                    <figure >
                        <img className='article-coffe1' src={PictureCoffe1} alt='Café Espresso' />
                        <div className='container-nav-images'>
                            <FontAwesomeIcon className='nav-images' icon={faCircle} />
                            <FontAwesomeIcon className='nav-images' icon={faCircle} />
                            <FontAwesomeIcon className='nav-images' icon={faCircle} />
                        </div>
                    </figure>
                    <FontAwesomeIcon className='next-image' icon={faChevronRight} />
                </div>
                <div className='description-featured'>
                    <p>
                        Si disfrutas el <strong>Café</strong>, no puedes dejar de probar nuestro <strong>Cappuccino</strong> o <strong>Expresso</strong>, asi como los mejores acompañamientos como Galletas o Queques especiales que tenemos para ti.
                    </p>
                    <div className='container-read-blog'>
                        <Link className='btn-read-blog'>
                            Leer más
                            <span className='arrow-read-blog'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>    
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </article>
  )
}

export default ArticleBlog