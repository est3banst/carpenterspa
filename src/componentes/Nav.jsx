import { useState } from 'react'
import '../assets/App.css'



export default function Nav () {

    const [isSideNav, setSideNav] = useState(false);
    const sideNavUlClass = isSideNav ? 'sidenav-ul-visible' : 'sidenav-ul'
    const settingSideNav = () => {
        setSideNav(!isSideNav);
    }
    return (
        <header className='header-comp'>
            
           <section className='sect-sidenav'>
          
                <ul className={sideNavUlClass}>
                    <a className='sidenav-a' href=''>
                    <li className='sidenav-li'>INICIO</li>
                    <span className="material-symbols-outlined">
                    home
                    </span>
                    </a>
                    <a className='sidenav-a' href=''>
                    <li className='sidenav-li'>TRABAJOS</li>
                    <span className="material-symbols-outlined">
                    carpenter
                    </span>
                    </a>
                    <a className='sidenav-a' href=''>
                    <li className='sidenav-li'>NOSOTROS</li>
                    <span className="material-symbols-outlined">
                    person
                    </span>
                    </a>
                    <a className='sidenav-a' href=''>
                    <li className='sidenav-li'>CONTACTO</li>
                    <span className="material-symbols-outlined">
                    phone_callback
                    </span>
                    </a>
                </ul>
           </section>
         
           <div className="hr-container">
           <h1 className='header-title'>CARPINTERIA MARTINEZ </h1>
            
            <span className='contact-today-icon'> 
            <span id='menu-resp' onClick={settingSideNav} className="material-symbols-outlined">
            menu
            </span>
            <a className='call-icon' href="tel://+59898775976">
            <svg  width="24" height="24" viewBox="0 0 24 24" 
                strokeWidth="2" stroke="currentColor" fill="none" 
                strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 
            2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
            </a>
           
            <a className='wp-icon' href="https://wa.me/+59898775976?text=Estoy%20interesado%20en%20un%20presupuesto%20para%20..">

            <svg  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" fill="none" strokeLinecap="round" 
                strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1
                0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            </a>
            </span>
            <nav>
            <ul className='hr-li-container'>
                    <a className='ul-nav-a' href="">
                    <span className="material-symbols-outlined">
                    home
                    </span>
                    <li className='hr-li'>Inicio</li>
                    </a>
                    <a className='ul-nav-a' href="">
                    <span className="material-symbols-outlined">
                    carpenter
                    </span>
                    <li className='hr-li'>Trabajos</li>
                    </a>
                    <a className='ul-nav-a' href="">
                    <span className="material-symbols-outlined">
                    person
                    </span>
                    <li className='hr-li'>Nosotros</li>
                    </a>
                    <a className='ul-nav-a' href="">
                    <span className="material-symbols-outlined">
                    phone_callback
                    </span>

                    <li className='hr-li'>Contacto</li>
                    </a>
            </ul>
            </nav>
          
           </div>
           <span className='sp-logo-cont'>
                

                <img
                className='sp-logo-cont-img'
                src='/carpenterlogo.png'
                alt=''
            />
            </span>
        </header>
    )
}