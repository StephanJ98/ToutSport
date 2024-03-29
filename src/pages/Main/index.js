import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { CategoryContext } from '../../Context/CategoryContext'
import Header from '../../components/Header/Header'
import Vip from '../../components/Vip'
import Carousel from 'react-bootstrap/Carousel'
import styles from './Main.module.css'
import './carousel.css'
import alpes from '../../assets/image/alpes.jpg'
import backpack from '../../assets/image/backpack.jpg'
import box from '../../assets/image/box.jpg'
import climb from '../../assets/image/climb.jpg'
import climb2 from '../../assets/image/climb2.jpg'
import dh from '../../assets/image/dh.jpg'
import kick from '../../assets/image/kick.jpg'
import kid from '../../assets/image/kid.jpg'
import loeb from '../../assets/image/loeb.jpg'
import neige from '../../assets/image/neige.jpg'
import roadride from '../../assets/image/roadride.jpg'
import run from '../../assets/image/run.jpg'
import surf from '../../assets/image/surf.jpg'
import wave from '../../assets/image/wave.jpg'
import vtt from '../../assets/image/vtt.jpg'
import wolfpack from '../../assets/image/wolfpack.jpg'
import ItemsContainerMainPage from '../../components/ItemsContainerMainPage';


export default function Main() {

    const [display, setDisplay] = useState('normal')
    const { changeCategory } = useContext(CategoryContext)
    let history = useHistory()

    useEffect(() => {
        let target = document.querySelector('#targetObserver')
        let target2 = document.querySelector('.targetObserver2')
        let observerDown = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setDisplay('none')
                }
            })
        }, {
            threshold: 0.75
        })
        observerDown.observe(target)

        let observerUp = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setDisplay('normal')
                }
            })
        }, {
            threshold: 0.75
        })
        observerUp.observe(target2)
    })

    const handleSetCategoria = async (elem) => {
        await changeCategory(elem)
        history.push("/cat")
    }

    return (
        <div id={styles.mainContainer}>
            <Header display={display} />
            <div id={styles.mainBody} className='targetObserver2'>
                <Carousel controls={false} pause={false} id={styles.carousel} indicators={true} interval={5000}>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={vtt}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6e54cd591e0043f9ef0f' />
                            <div className={styles.card} onClick={() => handleSetCategoria('btt')}>
                                <p className={styles.btn}><span>BTT</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={climb2}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a7a79e05898003e28527c' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={kid}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a7a2abdee1400464eba2f' />
                            <div className={styles.card} onClick={() => handleSetCategoria('mma')}>
                                <p className={styles.btn}><span>MMA</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={roadride}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6d62a1ea55001da52661' />
                            <div className={styles.card} onClick={() => handleSetCategoria('ciclismo')}>
                                <p className={styles.btn}><span>Ciclismo</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={wolfpack}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a704eeeee980020c17810' />
                            <div className={styles.card} onClick={() => handleSetCategoria('ciclismo')}>
                                <p className={styles.btn}><span>Ciclismo</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={wave}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a77deeeee980020c17811' />
                            <div className={styles.card} onClick={() => handleSetCategoria('surf')}>
                                <p className={styles.btn}><span>Surf</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={run}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a78b8e944a200261bc0a5' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={surf}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6853eeee980020c1780d' />
                            <div className={styles.card} onClick={() => handleSetCategoria('surf')}>
                                <p className={styles.btn}><span>Surf</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={alpes}
                            alt="Second slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a78b8e944a200261bc0a5' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={backpack}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a78b8e944a200261bc0a5' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={loeb}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a79b279eff40030efd8bd' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={box}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a77deeeee980020c17811' />
                            <div className={styles.card} onClick={() => handleSetCategoria('mma')}>
                                <p className={styles.btn}><span>MMA</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={dh}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6e54cd591e0043f9ef0f' />
                            <div className={styles.card} onClick={() => handleSetCategoria('btt')}>
                                <p className={styles.btn}><span>BTT</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={climb}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6ae7eeee980020c1780f' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={kick}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6b62d2712f001e0130a2' />
                            <div className={styles.card} onClick={() => handleSetCategoria('mma')}>
                                <p className={styles.btn}><span>MMA</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={neige}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <Vip id='608a6956eeee980020c1780e'/>
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p className={styles.btn}><span>Running</span><em></em></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div id='targetObserver'>
                <ItemsContainerMainPage />
            </div>
        </div>
    )
}
