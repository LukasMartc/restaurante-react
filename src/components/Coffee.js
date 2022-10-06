import TypeCoffee from '../images/coffee-item1.png'

const Coffee = () => {
  return (
    <div className='container-type'>
      <div>
        <img src={TypeCoffee} alt="Cafe Expresso"/>
      </div>
      <div className='container-title-type'>
        <h4 className='title-type'>EXPRESSO</h4>
        <div>
          <p className='paragraph-type'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.          
          </p>
        </div>
      </div>
    </div>  
  )
}

export default Coffee