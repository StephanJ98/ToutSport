import React from 'react'
import styles from './ItemsContainerMainPage.module.css'
import data from '../../assets/data/data.js'
import { useHistory  } from "react-router-dom"

export default function ItemsContainerMainPage() {
    let items = []
    let history = useHistory()

    const handleClick = (id) => {
        history.push(`/product/${id}`)
    }

    data.forEach(item => {
        if (items.length <= 7) {
            items.push(
                <div key={item.id} className={styles.itemContainerMainPage} onClick={() => handleClick(item.id)}>
                    <img className={styles.imageItemContainerMainPage} src={item.image} alt={item.title} />
                    <p className={styles.textMainPage}>{item.title.toLowerCase()}</p>
                    <p className={styles.price}>{item.price} €</p>
                </div>
            )
        }
    }
    )

    return (
        <div id={styles.itemsContainerMainPage}>
            {items}
        </div>
    )
}
