import { useState } from 'react'
import '../assets/Work.css'

export default function Works () {
    const [open, setItOpen] = useState(false);
    
    return (
        <>
        <div className='container-works'>
            <h2 className='works-heading'>Estos son algunos de nuestros trabajos</h2>
            <p className='para-works'>Cada proyecto se concibe en el diálogo con nuestros clientes al 
                interpretar correctamente la necesidad y trabajar correctamente con los espacios.</p>
            <figure>
                <img className='works-images' src='/esquinatvrack.jpg' alt='Aparador de TV esquinero de madera' />
           <figcaption>Rack TV esquinero terminación caoba</figcaption>
            </figure>
           <figure> 
            <img className='works-images' src='/cocinacomp.jpg' alt='Modulos de cocina, bajo mesada y aéreos' />
           <figcaption>Modulos de cocina aéreo y bajo mesada, azul laqueado</figcaption>
           </figure>
           
             <figure>
                <img className='works-images' src='/cocinaovertop.jpg' alt='Aéreos modulares de cocina imitación madera' />
             <figcaption>Modular aéreo en L imitación madera</figcaption>
             </figure>
            <figure>
                <img className='works-images' src='/cocinacompleta.jpg' alt='Aéreos modulares y bajo mesada en MDF, color amarillo y blanco' />
           <figcaption>Modular aéreo de cocina y bajo mesada amarillo y blanco laqueado </figcaption> 
           </figure>
        </div>
       
        <section className="section-works">
                
        <a className='email-now' href="mailto:estebeeen@outlook.com">
        <svg className='email-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
         fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
         fill="none"/><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
         <path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" /></svg>
        </a>
        <h2 className='works-heading'>
            Email
        </h2>
        <p className='section-par'>Puedes solicitar un presupuesto, o coordinar una visita</p>
        <p className='section-p'>Envíanos un mail</p>
    </section>
    </>
    )
}