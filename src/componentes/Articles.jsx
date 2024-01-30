import '../assets/Estilo.css'

export default function Articles () {
    return (
        <div id='about' className='container-about'>
            <h2 className='header-about'>Nosotros</h2>
            <article>
            <p className='par-about'>Diseño y ensamblaje de mobiliario tradicional</p>
            <p className='par-about'> Mobiliario fabricado acorde a tus necesidades y tu espacio,
                 trabajamos con una amplia gama de materias primas, siempre asesorando
                  para lograr un producto duradero y de fácil mantenimiento</p>
                 <p className='par-about-gar'>Nuestros trabajos tienen una garantía de hasta 10 años</p>
            </article>
            <section className='icons-about'>
            <div className='container-icons'>
            <span id='about-icons' className='material-symbols-outlined'>
            recycling
            </span>
            <p className='icons-text'>
                Materiales naturales, altamente reciclables
            </p>
            </div>
            <div className='container-icons'>
            <span id='about-icons' className='material-symbols-outlined'>
            savings
            </span>
            <p className='icons-text'>
                Muebles que lucen sin mantenimiento, cuidando tu economía
            </p>
            </div>
            <div className='container-icons'>
            <span id='about-icons' className='material-symbols-outlined'>
            hourglass_empty
            </span>
            <p className='icons-text'>
                Materiales de alta calidad se traducen en muebles de larga vida útil
            </p>
            </div>
            </section>
        </div>
    )
}