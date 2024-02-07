import ImageGallery from 'react-image-gallery'

import Bajo from '/imgs/cocina/bajomesada.jpg';
import Mesadau from '/imgs/cocina/bajomesadaenu.jpg';
import Cocina from '/imgs/cocina/cocinaaereo.jpg';
import Fullcocina from '/imgs/cocina/cocinacompleta.jpg';
import Aereo from '/imgs/cocina/cocinaovertop.jpg';

import '../assets/Gallery.css'

export default function Kitchen () {
    const kitchenImages = [
        { id :1,
        imgSrc: Bajo},
        { id :1,
        imgSrc: Mesadau},
        { id :1,
        imgSrc: Cocina},
        { id :1,
        imgSrc: Fullcocina},
        { id :1,
        imgSrc: Aereo},
    ]
    return (
        <div id='trabajos' className='container-kitchen-works'>
            <section className='kitchen-works-section'>
            
                
                {kitchenImages.map((image, index) => {
                    return (
                            <div className='container-img-kitchens' key={index}>
                            <img className='img-kitchens' src={image.imgSrc} alt="" />
                            <svg className='toclose-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                            stroke="currentColor" fill="none" strokeLinecap="round" 
                            strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            <span className='image-control'>
                    <svg className='arrow-left' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" fill="none" strokeLinecap="round" 
                        strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                     </svg>
                    <svg className='arrow-right' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                        stroke="currentColor" fill="none" strokeLinecap="round" 
                        strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </span>
                            </div>
                    )
                })}
                
                
            </section>
        </div>
    )
}