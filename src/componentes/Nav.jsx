import { useState } from 'react'
import '../assets/App.css'



export default function Nav () {

    const [isSideNav, setSideNav] = useState(false);
    const menuResp = isSideNav ? 'open' : '';
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
            <div id='menu-resp' className={menuResp} onClick={settingSideNav}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
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