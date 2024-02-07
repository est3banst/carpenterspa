import { useState } from 'react'
import '../assets/Work.css'
import Kitchen from './Kitchen';

export default function Works() {
    
    const [choice, setChoice] = useState(false);

    const makeChoice = () => {
        setChoice(!choice)
    }
    const isChoiceOnScreen = choice? 'container-hidden' : 'container-choice' ;

    return (
        <>
            <section className='container-works'>
            <h2 className='works-heading'>Algunos de nuestros trabajos</h2>
                <p className='para-works'>Cada proyecto se concibe en el diálogo con nuestros clientes al
                    interpretar correctamente la necesidad y trabajar correctamente con los espacios.</p>
              
            </section>
            <div className={isChoiceOnScreen}>
           
            <section className='container-choice'>
                <button onClick={makeChoice}>
                <svg className='choice-selection' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12l3 0" /><path d="M12 3l0 3" /><path d="M7.8 7.8l-2.2 -2.2" />
                    <path d="M16.2 7.8l2.2 -2.2" /><path d="M7.8 16.2l-2.2 2.2" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
               <p>Cocina</p> 
                </button>
                <img src="/imgs/cocina/kitchenchoice.jpg" alt="" />
            </section>
            <section className='container-choice'>
                <button> 
                <svg className='choice-selection' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12l3 0" /><path d="M12 3l0 3" /><path d="M7.8 7.8l-2.2 -2.2" />
                    <path d="M16.2 7.8l2.2 -2.2" /><path d="M7.8 16.2l-2.2 2.2" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
                <p>Dormitorio</p>
                 </button>
                <img src="/imgs/dormitorio/armarioschoice.jpg" alt="" />
            </section>
            </div>
            {choice && <Kitchen/>
               }
            
        </>
    )
}