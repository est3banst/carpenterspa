import '../App.css'

export default function Nav () {
    return (
        <header className='header-comp'>
            <span className='sp-logo-cont'>
                <img
                className='sp-logo-cont-img'
                src='/carpenterlogo.png'
                alt=''
            />
            </span>
            <h1 className='header-title'>CARPINTERIA MARTINEZ</h1>
           <div className='cont-menu-mobile'>
           <span id='menu-resp' class="material-symbols-outlined">
            menu
            </span>
           </div>
           <section className='sect-sidenav'>
                <ul>
                    <a href=''>
                    <li>Inicio</li>
                    <span className="material-symbols-outlined">
                    home
                    </span></a>
                    <a href=''>
                    <li>Trabajos</li>
                    <span className="material-symbols-outlined">
                    carpenter
                    </span>
                    </a>
                    <a href=''>
                    <li>Nosotros</li>
                    <span className="material-symbols-outlined">
                    person
                    </span>
                    </a>
                    <a href=''>
                    <li>Contacto</li>
                    <span className="material-symbols-outlined">
                    phone_callback
                    </span>
                    </a>
                </ul>
           </section>
            <nav>
            <ul className='hr-li-container'>
                <a href="">
                    <span className="material-symbols-outlined">
                    home
                    </span>
                    <li>Inicio</li>
                    </a>
                    <a href="">
                    <span className="material-symbols-outlined">
                    carpenter
                    </span>
                    <li>Trabajos</li>
                    </a>
                    <a href="">
                    <span className="material-symbols-outlined">
                    person
                    </span>
                    <li>Nosotros</li>
                    </a>
                    <a href="">
                    <span className="material-symbols-outlined">
                    phone_callback
                    </span>

                    <li>Contacto</li>
                    </a>
            </ul>
            </nav>
            <div className='hr-container'>
              
            </div>

        </header>
    )
}