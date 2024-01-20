import '../assets/Estilo.css'

export default function Articles () {
    return (
        <div className='container-about'>
            <h2 className='header-about'>Nosotros</h2>
            <article>
            <p className='par-about'>Diseño y ensamblaje de mobiliario tradicional</p>
            <p className='par-about'> Mobiliario fabricado acorde a tus necesidades y tu espacio,
                 trabajamos con una amplia gama de materias primas, siempre asesorando
                  para lograr un producto duradero y de fácil mantenimiento</p>
                 <p className='par-about-gar'>Nuestros trabajos tienen una garantía de hasta 10 años</p>
            </article>
            <section className='icons-about'>
            <span id='about-icons' class="material-symbols-outlined">
            recycling
            </span>
            <span id='about-icons' class="material-symbols-outlined">
            savings
            </span>
            <span id='about-icons' class="material-symbols-outlined">
            hourglass_empty
            </span>
            </section>
        </div>
    )
}