import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import data from '../../assets/data/data.js'
import styles from './Product.module.css'
import Header from '../../components/HeaderBis'

export default function Product() {
    let e = window.location.href.split('/')
    let el = e[e.length - 1]
    let exit = false
    let count = 0
    const [item, setItem] = useState({ id: '', image: '', title: '', sport: '', store: '', price: 0 })

    if ((item.id === '') && (el <= data.length - 1)) {
        while ((exit !== true) || (count <= data.length - 1)) {
            if (data[count].id === data[el].id) {
                exit = true
                setItem({ id: data[count].id, image: data[count].image, title: data[count].title, sport: data[count].sport, store: data[count].store, price: data[count].price })
            }
            count++
        }
    }

    return (
        <div id={styles.mainContainer}>
            <Header var={'diff'} />
            <div id={styles.container}>
                <div id={styles.textContainer}>
                <h2 className={styles.textSubContainer} id={styles.title}>{item.title}</h2>
                    <div className={styles.textSubContainer}>
                        <p id={styles.text}>Tipo de deporte:</p>
                        <p>{item.sport}</p>
                    </div>
                    <div className={styles.textSubContainer}>
                        <p id={styles.text}>Tienda:</p>
                        <p>{item.store}</p>
                    </div>
                    <div className={styles.textSubContainer}>
                        <p id={styles.text}>Precio: </p>
                        <p>{item.price} €</p>
                    </div>
                </div>
                <div id={styles.imgContainer}>
                    <TransformWrapper>
                        <TransformComponent>
                            <img id={styles.image} src={item.image} alt='product' />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>
        </div>
    )
}
