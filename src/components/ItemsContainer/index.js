import React, { useContext, useEffect, useState } from 'react'
import styles from './ItemsContainer.module.css'
import { useHistory } from "react-router-dom"
import { CategoryContext } from '../../Context/CategoryContext'
import { DataContext } from '../../Context/DataContext'

export default function ItemsContainer() {
    const { category } = useContext(CategoryContext)
    const { data } = useContext(DataContext)
    const [products, setProducts] = useState([])
    let items = []
    let history = useHistory()

    useEffect(() => {
        if (products.length === 0) {
            setProducts(data)
        }
    }, [products.length, data])

    const handleClick = (id) => {
        history.push(`/product/${id}`)
    }

    if (category === 'null' || category === '') {
        products.forEach(item => {
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
        products.forEach(item => {
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
