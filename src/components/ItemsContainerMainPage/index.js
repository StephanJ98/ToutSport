import React, { useEffect, useState } from 'react'
import styles from './ItemsContainerMainPage.module.css'
import { useHistory } from "react-router-dom"

export default function ItemsContainerMainPage() {
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
