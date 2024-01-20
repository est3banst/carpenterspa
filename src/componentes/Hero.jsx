import '../assets/App.css'
export default function Hero () {
    return (
      <main>
        <div className='hero-container'>
        <img
        src='/hero-img.jpg'
        alt=''
        className='hero-imgone'/>
        <img 
        src='/bathdoor.jpg' 
        alt='' 
        className='hero-imgtwo' />
        <button className='hero-button'>Cotizá tu siguiente proyecto</button>
      </div>  
      </main>
    )
}