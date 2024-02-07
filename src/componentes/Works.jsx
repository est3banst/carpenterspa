import { useState } from 'react'

import {kitchenImages, bedroomImages} from '../componentes/pictures'

import '../assets/Work.css'
import '../assets/Gallery.css'



export default function Works() {

    const [activeImg, setActiveImg] = useState(0);

    const [choiceone, setChoice] = useState(false);
    const [choicetwo, setSecondChoice] = useState(false);

    const openModal = () => {
        setChoice(!choiceone)
    }

    const openSecondModal = () => {
        setSecondChoice(!choicetwo)
    }
    const isChoiceOnScreen = choiceone || choicetwo? 'container-hidden' : 'container-choice';

    
    return (
        <>
            <section className='container-works'>
            <h2 className='works-heading'>Algunos de nuestros trabajos</h2>
                <p className='para-works'>Cada proyecto se concibe en el diálogo con nuestros clientes al
                    interpretar correctamente la necesidad y trabajar correctamente con los espacios.</p>
              
            </section>
            <div className={isChoiceOnScreen}>
           
            <section className='container-choice'>
                <button onClick={openModal}>
                <svg className='choice-selection' 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12l3 0" />
                    <path d="M12 3l0 3" />
                    <path d="M7.8 7.8l-2.2 -2.2" />
                    <path d="M16.2 7.8l2.2 -2.2" />
                    <path d="M7.8 16.2l-2.2 2.2" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
               <p>Cocina</p> 
                </button>
                <img src="/imgs/cocina/kitchenchoice.jpg" alt="" />
            </section>
            <section className='container-choice'>
                <button onClick={openSecondModal}> 
                <svg className='choice-selection' 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12l3 0" />
                    <path d="M12 3l0 3" />
                    <path d="M7.8 7.8l-2.2 -2.2" />
                    <path d="M16.2 7.8l2.2 -2.2" />
                    <path d="M7.8 16.2l-2.2 2.2" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
                <p>Dormitorio</p>
                 </button>
                <img src="/imgs/dormitorio/armarioschoice.jpg" alt="" />
            </section>
            </div>
            {choiceone && <div id='trabajos' className='container-kitchen-works'>
            <section className='kitchen-works-section'>
            
                
                {kitchenImages.map((image, activeImg) => {
                    return (
                            <div className='container-img-kitchens' key={activeImg}>
                              
                            
                                    <img className='img-kitchens' src={image.imgSrc} alt="" />
                            <svg className='toclose-icon' 
                                onClick={openModal} 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round">
                                <path stroke="none" 
                                d="M0 0h24v24H0z" 
                                fill="none"/>
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                            <span className='image-control'>
                            <svg className='arrow-left' 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2"
                                stroke="currentColor" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 6l-6 6l6 6" />
                                
                            </svg>
                            <svg className='arrow-right'
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                            </span>
                                
                            </div>
                    )
                })}
                
                
                </section>
                </div>
            }
            {choicetwo && <div id='trabajos' className='container-kitchen-works'>
            <section className='kitchen-works-section'>
            
                
                {bedroomImages.map((image, index) => {
                    return (
                            <div className='container-img-kitchens' key={index}>
                            <img className='img-kitchens' src={image.imgSrc} alt="" />
                            <svg className='toclose-icon' 
                                onClick={openSecondModal} 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                            </svg>
                            <span className='image-control'>
                            <svg className='arrow-left' 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2"
                                stroke="currentColor" fill="none" strokeLinecap="round" 
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 6l-6 6l6 6" />
                            </svg>
                            <svg className='arrow-right' 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" fill="none" strokeLinecap="round" 
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                </span>
                            </div>
                    )
                })}
                
                
                </section>
                </div>
            }
            
        </>
    )
}
