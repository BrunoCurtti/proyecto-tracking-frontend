import './index.css'

function NavBar() {

    return (
      <>
        <div className="nav__conteiner">
                <img src="./logo-Panini.png" alt="logo Panini" className='nav__logo'/>
            <div>
                <button>Todas</button>
                <button>Faltantes</button>
                <button>Repetidas</button>
            </div>
        </div>
      </>
    )
  }
  
  export default NavBar