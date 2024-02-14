import React, { useState, useRef, useEffect } from 'react'
import {kitchenImages, bedroomImages} from './pictures'


import '../assets/Gallery.css'
import '../assets/Work.css'




const Works = () => {

    const [choiceone, setChoice] = useState(false);
    const [choicetwo, setSecondChoice] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef();

    useEffect(() => {
        const sectionNode = sectionRef.current;
        const imgNodes = sectionNode.querySelectorAll("li > img")[currentIndex];
        console.log(imgNodes)
        if (imgNodes) {
            imgNodes.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
            });
        }
    },[currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstImg = currentIndex === 0;
                return isFirstImg ? 0 : curr - 1;
            })
        } else {
            const isLastImg = currentIndex === kitchenImages.length -1;
            if (!isLastImg) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }
  

    const openModal = (index) => {
        setCurrentIndex(index);
        const modal = document.getElementById('myModal');
        modal.style.visibility = 'visible';
      };
    
      const closeModal = () => {
        const modal = document.getElementById('myModal');
        modal.style.visibility = 'hidden';
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
                <button> 
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
           
            <div id="myModal" className="modal" onClick={closeModal}>
        <div id="trabajos" className="container-kitchen-works" onClick={(e) => e.stopPropagation()}>
        <ul ref={sectionRef} className="kitchen-works-section">
          {kitchenImages.map((image, index) => (
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
          <span className="close-btn" onClick={closeModal}>
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
          </span>
          <div className="image-control-modal">
            <svg
              className="arrow-left"
              onClick={() => scrollToImage('prev')}
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
              onClick={() => scrollToImage('next')}
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
