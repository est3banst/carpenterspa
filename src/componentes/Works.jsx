import { useState } from 'react'
import '../assets/Work.css'

export default function Works() {


    const [openModal, setModalOpen] = useState(false);

    const modalOpen = openModal ? 'works-images-modal' : 'works-images'
    const imgsShow = openModal ? 'img-container-modal' : 'img-container'
    // const galleryImgs = document.querySelectorAll('.works-images')


    return (
        <>
            <div id='trabajos' className='container-works'>
                <h2 className='works-heading'>Estos son algunos de nuestros trabajos</h2>
                <p className='para-works'>Cada proyecto se concibe en el diálogo con nuestros clientes al
                    interpretar correctamente la necesidad y trabajar correctamente con los espacios.</p>
                <section className='works-ul'>
                <ul>
                    <li>
                        <img className={modalOpen} src='/imgs/placard5pbl.jpeg' alt='Aparador de TV esquinero de madera' />
                        <figcaption>Placard 5 Puertas con modular superior ,8 estantes. Herrajes : con freno, telescópicas y con resorte</figcaption>
                  
                    </li>
                   <li>
                        <img className={modalOpen} src='/imgs/placard6pne.jpeg' alt='Modulos de cocina, bajo mesada y aéreos' />
                        <figcaption>Placard 6 puertas con modular superior, 3 estantes. Herrajes : con freno, telescópicas y con resorte</figcaption>
                  
                   </li>
                    <li>
                        <img className={modalOpen} src='/imgs/cocinaovertop.jpg' alt='Aéreos modulares de cocina imitación madera' />
                        <figcaption>Modular aéreo en L imitación madera</figcaption>
             
                    </li>
                    <li>
                        <img className={modalOpen} src='/imgs/cocinacompleta.jpg' alt='Aéreos modulares y bajo mesada en MDF, color amarillo y blanco' />
                        <figcaption>Modular aéreo de cocina y bajo mesada amarillo y blanco laqueado </figcaption>
                   
                    </li>
                    <li>
                        <img className={modalOpen} src='/imgs/bajomesada.jpg' alt='Aéreos modulares y bajo mesada en MDF, color amarillo y blanco' />
                        <figcaption>Modular bajo mesada en L, terminación madera</figcaption>
                   
                    </li>
                    <li>
                        <img className={modalOpen} src='/imgs/bajomesadaenu.jpg' alt='Aéreos modulares y bajo mesada en MDF, color amarillo y blanco' />
                        <figcaption>Modular bajo mesada en U, terminación verde manzana laqueado </figcaption>
                   
                    </li>
                </ul>
                </section>
            </div>
        </>
    )
}