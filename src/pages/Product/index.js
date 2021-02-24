import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import styles from './Product.module.css'
import Header from '../../components/HeaderBis'

export default function Product() {
    const [item, setItem] = useState({ id: '', image: '', title: '', sport: '', store: '', price: 0 })
    const { data } = useContext(DataContext)

    useEffect(() => {
        setItem(data)
    }, [data])

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
