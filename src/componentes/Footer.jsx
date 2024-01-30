import { useEffect, useState } from 'react'
import '../assets/Footer.css'


export default function Footer () {

    const [showBttn, setShowBttn] = useState(false);
   
    useEffect(() => {
       const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setShowBttn(scrollTop > 20);
    };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    } ,[]);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
        });
        }
    return (
        <>
        <div id='footer' className="container-footer">
            <ul className='ul-footer'><strong>Mapa del sitio</strong>
                <li className='li-footer'>Trabajos</li>
                <li className='li-footer'>Nosotros</li>
                <li className='li-footer'>Contacto</li>
            </ul>
        <footer>
                <strong>Seguinos en :</strong>
                <a href="https://www.facebook.com/profile.php?id=61556202024852">
                <svg className='social-face' width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 
                    -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </a>
                <a href="https://www.instagram.com/martinezgabriel842/">
                <svg className='social-insta' width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4
                    4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                </svg>
                </a>
           
        
       
            <h3 className='footer-brand'>CARPINTERIA MARTINEZ</h3>
            <small>2024</small>

            {showBttn && (
                <button className='footer-button' onClick={scrollToTop}>
                <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
                </svg>
                </button>
            )}
        </footer>
        </div>
        </>
    )
};