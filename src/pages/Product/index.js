import React, { useEffect, useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import Rating from '@material-ui/lab/Rating'
import styles from './Product.module.css'
import Header from '../../components/HeaderBis'

export default function Product() {
    const [item, setItem] = useState({ id: '', title: '', images: [], rating: 0, description: '', sport: '', store: '', caracteristicas: {peso: 0, talla: 0, creador: ''}, tags: [] })
    let elemId = window.location.href.split('/')[window.location.href.split('/').length - 1]

    useEffect(() => {
        if (item.id === '') {
            fetch(`https://toutsport-api.herokuapp.com/list/${elemId}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setItem(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }
    })

    return (
        <div id={styles.mainContainer}>
            <Header var={'diff'} />
            <div id={styles.container}>
                <div id={styles.textContainer}>
                    <h2 className={styles.textSubContainer} id={styles.title}>{item.title}</h2>
                    <div className={styles.textSubContainer}>
                        <Rating name="rating-read" size="large" max={5} value={item.rating} precision={0.5} readOnly />
                    </div>
                    <div className={styles.textSubContainerBis}>
                        <div className={styles.textSubContainerBis}>
                            <p id={styles.text}>Peso:</p>
                            <p>{item.caracteristicas.peso}gr</p>
                        </div>
                        <div className={styles.textSubContainerBis}>
                            <p id={styles.text}>Talla:</p>
                            <p>{item.caracteristicas.talla}</p>
                        </div>
                    </div>
                    <div className={styles.textSubContainerBis}>
                        <div className={styles.textSubContainerBis}>
                            <p id={styles.text}>Deporte:</p>
                            <p>{item.sport}</p>
                        </div>
                        <div className={styles.textSubContainerBis}>
                            <p id={styles.text}>Tienda:</p>
                            <p>{item.store}</p>
                        </div>
                    </div>
                    <div className={styles.textSubContainer}>
                        <p id={styles.description}>{item.description}</p>
                    </div>
                </div>
                <div id={styles.imgContainer}>
                    <TransformWrapper>
                        <TransformComponent>
                            <img id={styles.image} src={item.images[0]} alt='product' />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>
        </div>
    )
}
