import Nav from './componentes/Nav';
import Hero from './componentes/Hero';
import Articles from './componentes/Articles';
import Footer from './componentes/Footer';
import Works from './componentes/Works';


function App() {

  return (
    <>
     
     <Nav/>
     <a className='whatsapp-div' target='_blank' href="https://wa.me/+59898775976?text=Estoy%20interesado%20en%20un%20presupuesto%20para%20..">
     <span className='cont-whatsapp'>
            <svg className='whats-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
            stroke="currentColor" fill="none" strokeLinecap="round" 
            strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
            fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5
             .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
             </svg>
            </span>
     </a>
     <Hero/>
     <Articles/>
     <Works/>
     <Footer/>
    </>
  )
}

export default App;
