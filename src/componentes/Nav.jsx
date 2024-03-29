import { useEffect, useState } from 'react'
import '../assets/App.css'


export default function Nav () {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSideNav, setSideNav] = useState(false);
    const menuResp = isSideNav ? 'open' : '';
    const sideNavUlClass = isSideNav ? 'sidenav-ul-visible' : 'sidenav-ul'
    const settingSideNav = () => {
        setSideNav(!isSideNav);
    }
    
    useEffect(()=>{
        const handleResize = () =>{ setWindowWidth(window.innerWidth) }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    useEffect(()=> {
        if(windowWidth > 1159) {
            setSideNav(false);
        }
    }, [windowWidth])

    return ( 
        <>
        <header className='header-comp'>
            
           <div className="hr-container">
          <div className="hr-title">
          <h1 className='header-title'>CARPINTERIA MARTINEZ </h1>
            <small className='small-header'>Creando espacios de inspiración</small>
          </div>
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
                    <a className='ul-nav-a' href="#about">
                    <span className="material-symbols-outlined">
                    person
                    </span>
                    <li className='hr-li'>Nosotros</li>
                    </a>
                    <a className='ul-nav-a' href="#trabajos">
                    <span className="material-symbols-outlined">
                    carpenter
                    </span>
                    <li className='hr-li'>Trabajos</li>
                    </a>
                    
                    <a className='ul-nav-a' href="#contact">
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
        
          <ul id="responsive-ul" className={sideNavUlClass}>
         
             <a className='sidenav-a' href='#' onClick={settingSideNav}>
             <li className='sidenav-li'>INICIO</li>
             <span className="material-symbols-outlined">
             home
             </span>
             </a>
             <a className='sidenav-a' href='#about' onClick={settingSideNav}>
             <li className='sidenav-li'>NOSOTROS</li>
             <span className="material-symbols-outlined">
             person
             </span>
             </a>
             <a className='sidenav-a' href='#trabajos' onClick={settingSideNav}>
             <li className='sidenav-li'>TRABAJOS</li>
             <span className="material-symbols-outlined">
             carpenter
             </span>
             </a>
             <a className='sidenav-a' href='#contact' onClick={settingSideNav}>
             <li className='sidenav-li'>CONTACTO</li>
             <span className="material-symbols-outlined">
             phone_callback
             </span>
             </a>
            
         </ul>
    </>
    )
}