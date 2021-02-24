import React, { useContext, useEffect, useState } from 'react'
import styles from './ItemsContainerMainPage.module.css'
import { useHistory } from "react-router-dom"
import { DataContext } from '../../Context/DataContext'

export default function ItemsContainerMainPage() {
    const { data, changeData } = useContext(DataContext)
    const [products, setProducts] = useState([])
    let items = []
    let history = useHistory()

    useEffect(() => {
        changeData('/list')
        setProducts(data)
    }, [data, changeData])

    const handleClick = async (id) => {
        await changeData(`/list/${id}`)
        await setProducts(data)
        await history.push(`/product/${id}`)
    }

    if (products.length > 0) {
        products.forEach(item => {
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
    }

    return (
        <div id={styles.itemsContainerMainPage}>
            {items}
        </div>
    )
}
