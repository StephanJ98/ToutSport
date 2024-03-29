import React, { useContext, useEffect, useState } from 'react'
import styles from './ItemsContainer.module.css'
import { useHistory } from "react-router-dom"
import { CategoryContext } from '../../Context/CategoryContext'

export default function ItemsContainer() {
    const { category } = useContext(CategoryContext)
    const [data, setData] = useState([])
    let items = []
    let history = useHistory()

    useEffect(() => {
        if (data.length === 0) {
            fetch('https://toutsport-api.herokuapp.com/list')
                .then(res => res.json())
                .then(
                    (result) => {
                        setData(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }
    })

    const handleClick = (id) => {
        history.push(`/product/${id}`)
    }

    if (category === 'null' || category === '') {
        data.forEach(item => {
            items.push(
                <div key={item._id} className={styles.itemContainer} onClick={() => handleClick(item._id)}>
                    <p className={styles.text}>{item.title}</p>
                    <img className={styles.image} src={item.images[0]} alt={item.title} />
                </div>
            )
        }
        )
    } else {
        data.forEach(item => {
            if (category === item.sport) {
                items.push(
                    <div key={item._id} className={styles.itemContainer} onClick={() => handleClick(item._id)}>
                        <p className={styles.text}>{item.title}</p>
                        <img className={styles.image} src={item.images[0]} alt={item.title} />
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
