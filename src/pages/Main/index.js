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
                            <Vip id='2' />
                            <div className={styles.card} onClick={() => handleSetCategoria('btt')}>
                                <p>BTT</p>
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
                            <Vip id='7' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
                            <Vip id='14' />
                            <div className={styles.card} onClick={() => handleSetCategoria('mma')}>
                                <p>MMA</p>
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
                            <Vip id='4' />
                            <div className={styles.card} onClick={() => handleSetCategoria('ciclismo')}>
                                <p>Ciclismo</p>
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
                            <Vip id='4' />
                            <div className={styles.card} onClick={() => handleSetCategoria('ciclismo')}>
                                <p>Ciclismo</p>
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
                            <Vip id='15' />
                            <div className={styles.card} onClick={() => handleSetCategoria('surf')}>
                                <p>Surf</p>
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
                            <Vip id='13' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
                            <Vip id='19' />
                            <div className={styles.card} onClick={() => handleSetCategoria('surf')}>
                                <p>Surf</p>
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
                            <Vip id='10' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
                            <Vip id='10' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
                            <Vip id='7' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
                            <Vip id='14' />
                            <div className={styles.card} onClick={() => handleSetCategoria('mma')}>
                                <p>MMA</p>
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
                            <Vip id='0' />
                            <div className={styles.card} onClick={() => handleSetCategoria('btt')}>
                                <p>BTT</p>
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
                            <Vip id='10' />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
                            <Vip id='14' />
                            <div className={styles.card} onClick={() => handleSetCategoria('mma')}>
                                <p>MMA</p>
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
                            <Vip  />
                            <div className={styles.card} onClick={() => handleSetCategoria('running')}>
                                <p>Running</p>
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
