import React, { useState, useRef, useEffect } from 'react'
import {kitchenImages, bedroomImages} from './pictures'


import '../assets/Gallery.css'
import '../assets/Work.css'




const Works = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const kitRef = useRef();
    const bedRef = useRef();

  
    useEffect(() => {
        const kitNode = kitRef.current;
        const imgKitNodes = kitNode.querySelectorAll("li > img")[currentIndex];
        if (imgKitNodes) {
            imgKitNodes.scrollIntoView({
                behavior: 'auto'
            });
        }
      
    },[currentIndex]); 
  

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstImg = currentIndex === 0;
                return isFirstImg ? kitchenImages.length - 1 : curr - 1;
            })
        } else {
            const isLastImg = currentIndex === kitchenImages.length -1;
            if (!isLastImg) {
                setCurrentIndex(curr => curr + 1);
            } else { setCurrentIndex(currentIndex - kitchenImages.length -1)}
        }
    }
  

    const openModal = (el) => {
        el.style.visibility = 'visible';
      
      };
    
      const closeModal = (el) => {
        el.style.visibility = 'hidden';
      };

    return (
        <>
            <section className='container-works'>
            <h2 className='works-heading'>Algunos de nuestros trabajos</h2>
                <p className='para-works'>Cada proyecto se concibe en el diálogo con nuestros clientes al
                    interpretar correctamente la necesidad y trabajar correctamente con los espacios.</p>
              
            </section>
            <div className='container-choice'>
           
            <section className='container-choice'>
                <button onClick={() => openModal(document.getElementById('myModal'))}>
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
                <button onClick={() => openModal(document.getElementById('secondModal'))}> 
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
           
            <div id="myModal" className="modal">
            <div className="container-kitchen-works">
        <ul ref={kitRef} className="kitchen-works-section">
          {kitchenImages.map((image) => (
                
            <li className="container-img-kitchens" key={image.id}>
              <img
                className="img-kitchens"
                src={image.imgSrc}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
       
          <span className="close-btn" onClick={() => closeModal(document.getElementById('myModal'))}>
          <svg className='toclose-icon' 
                     
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
          </span>
          <div className="image-control-modal">
            <svg
              className="arrow-left"
              viewBox="0 0 24 24"
              onClick={() => scrollToImage('prev')}
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
            <svg
              className="arrow-right"
              viewBox="0 0 24 24"
              onClick={() => scrollToImage('next')}
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </div>
       
      </div>
                   
      <div id="secondModal" className="modalTwo">
            <div className="container-kitchen-works">
        <ul ref={bedRef} className="kitchen-works-section">
          {bedroomImages.map((image) => (
                
            <li className="container-img-kitchens" key={image.id}>
              <img
                className="img-kitchens"
                src={image.imgSrc}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
       
          <span className="close-btn" onClick={() => closeModal(document.getElementById('secondModal'))}>
          <svg className='toclose-icon' 
                     
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
          </span>
          <div className="image-control-modal">
            <svg
              className="arrow-left"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
            <svg
              className="arrow-right"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </div>
       
      </div>
        </>
    )
}
export default Works
