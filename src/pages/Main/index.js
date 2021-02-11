import React from 'react'
import Header from '../../components/Header/Header'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Main.module.css'
import './carousel.css'
import bike2 from '../../assets/image/bike2.jpg'
import gym from '../../assets/image/gym.jpg'
import send from '../../assets/image/send.jpg'
import alaph2 from '../../assets/image/alaph2.jpg'
import chabal from '../../assets/image/chabal.jpg'
import loeb from '../../assets/image/loeb.jpg'
import poel from '../../assets/image/poel.jpg'
import climb from '../../assets/image/climb.jpg'
import kick from '../../assets/image/kick.jpg'
import neige from '../../assets/image/neige.jpg'
import vtt from '../../assets/image/vtt.jpg'
import train from '../../assets/image/train.webp'
import ItemsContainerMainPage from '../../components/ItemsContainerMainPage';


export default function Main() {
    return (
        <div id={styles.mainContainer}>
            <Header id={styles.header} />
            <section id={styles.mainBody}>
                <Carousel id={styles.carousel} indicators={true} interval={2000}>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={vtt}
                            alt="First slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <h3>I’ve failed over and over again in my life. And that is why I succeed.</h3>
                            <h2>Michael Jordan</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={bike2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <h3>It is not the size of a man but the size of his heart that matters.</h3>
                            <h2>Evander Holyfield</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={gym}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <h3>Hard work beats talent when talent doesn’t work hard.</h3>
                            <h2>Tim Notke</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={send}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <h3>A trophy carries dust. Memories last forever.</h3>
                            <h2>Mary Lou Retton</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={chabal}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextLigth}>
                            <h3>We are in France. We speack french.</h3>
                            <h2>Sebastien Chabal</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={loeb}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextDark}>
                            <h3>The man who has no imagination has no wings.</h3>
                            <h2>Muhammad Ali</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={poel}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextDark}>
                            <h3>An athlete cannot run with money in his pockets. He must run with hope in his heart and dreams in his head.</h3>
                            <h2>Emil Zatopek</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={alaph2}
                            alt="Third slide"
                        />
                        <Carousel.Caption className={styles.carouselTextDark}>
                            <h3>As long as I breathe, I attack.</h3>
                            <h2>Bernard Hinault</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={climb}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={kick}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={neige}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img
                            className={styles.sliderImage}
                            src={train}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <ItemsContainerMainPage />
        </div>
    )
}
