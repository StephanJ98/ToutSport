import React, { useContext } from 'react'
import styles from './ItemsContainer.module.css'
import { useHistory  } from "react-router-dom"
import { CategoryContext } from '../../Context/CategoryContext'
import data from '../../assets/data/data.js'

export default function ItemsContainer() {
    const { category } = useContext(CategoryContext)
    let items = []
    let history = useHistory()

    const handleClick = (id) => {
        history.push(`/product/${id}`)
    }

    if (category === 'null' || category === '') {
        data.forEach(item => {
            items.push(
                <div key={item.id} className={styles.itemContainer} onClick={() => handleClick(item.id)}>
                    <p className={styles.text}>{item.title}</p>
                    <p className={styles.price}>{item.price} €</p>
                    <img className={styles.image} src={item.image} alt={item.title} />
                </div>
            )
        }
        )
    } else {
        data.forEach(item => {
            if (category === item.sport) {
                items.push(
                    <div key={item.id} className={styles.itemContainer} onClick={() => handleClick(item.id)}>
                        <p className={styles.text}>{item.title}</p>
                        <p className={styles.price}>{item.price} €</p>
                        <img className={styles.image} src={item.image} alt={item.title} />
                    </div>
                )
            }
        }
        )
    }

    return (
        items.length > 0 ? (
            <div id={styles.itemsContainer}>
                {items}
            </div>
        ) : (
                <div className={styles.emptyContainer}>
                    <p className={styles.emptyText}>No hay elementos que coincidan con la busqueda</p>
                </div>
            )
    )
}
