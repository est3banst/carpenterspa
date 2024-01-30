import '../assets/Contact.css'

export default function Contact () {
    return (
        <section id='contact' className="section-works">

        <a className='email-now' href="mailto:estebeeen@outlook.com">
            <svg className='email-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                    fill="none" /><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" /></svg>
        </a>
        <h2 className='works-heading'>
            Email
        </h2>
        <p className='section-par'>Puedes solicitar un presupuesto, o coordinar una visita</p>
        <p className='section-p'>Envíanos un mail</p>

        <a className='call-us-now' href="tel://+59898775976">
            <svg className='call-us-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" 
            strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
        </a>    
            <h2>Llámanos</h2>
            <p className='section-par'>Podés llamarnos dentro de nuestros horarios de atención y conversar tu siguiente proyecto</p>
            <p className='section-p'>Horario de atención: Lunes a Viernes 7:30 a 18:00</p>
        
    </section>
    )
}