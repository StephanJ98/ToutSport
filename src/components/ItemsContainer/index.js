import React, { useContext } from 'react'
import styles from './ItemsContainer.module.css'
import { CategoryContext } from '../../Context/CategoryContext'
import data from '../../assets/data/data.js'

export default function ItemsContainer() {
    const { category } = useContext(CategoryContext)
    const items = []

    if (category === 'null' || category === '') {
        data.forEach(item => {
            items.push(
                <div key={item.id} className={styles.itemContainer}>
                    <p className={styles.text}>{item.title}</p>
                    <div className={styles.textContainer}>
                        <p className={styles.capitalize}>Deporte: {item.sport}</p>
                        <p className={styles.capitalize}>Tienda: {item.store}</p>
                    </div>
                    <img className={styles.image} src={item.image} alt={item.title} />
                </div>
            )
        }
        )
    } else {
        data.forEach(item => {
            if (category === item.sport) {
                items.push(
                    <div key={item.id} className={styles.itemContainer}>
                        <p className={styles.text}>{item.title}</p>
                        <div className={styles.textContainer}>
                            <p className={styles.capitalize}>Deporte: {item.sport}</p>
                            <p className={styles.capitalize}>Tienda: {item.store}</p>
                        </div>
                        <img className={styles.image} src={item.image} alt={item.title} />
                    </div>
                )
            }
        }
        )
    }

    return (
        <div id={styles.itemsContainer}>
            {items.length > 0 ? items : (
                <div className={styles.itemContainer}>
                    <p className={styles.text}>No hay elementos que coincidan con la busqueda</p>
                </div>
            )}
        </div>
    )
}
