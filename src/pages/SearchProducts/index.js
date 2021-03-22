import React, { useState, useEffect } from 'react'
import styles from './SearchProducts.module.css'
import { useHistory } from "react-router-dom"
import Header from '../../components/HeaderBis'

export default function SearchProducts() {
    const [data, setData] = useState([])
    let items = []
    let history = useHistory()

    useEffect(() => {
        if (data.length === 0) {
            fetch(`https://toutsport-api.herokuapp.com/search/${window.localStorage.getItem("data")}`)
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

    if (data.length > 0) {
        data.forEach(item => {
            items.push(
                <div key={item.id} className={styles.itemContainer} onClick={() => handleClick(item.id)}>
                    <p className={styles.text}>{item.title}</p>
                    <img className={styles.image} src={item.images[0]} alt={item.title} />
                </div>
            )
        })
    }


    return (
        items.length > 0 ? (
            <div id={styles.container}>
                <Header var={'diff'} />
                <div id={styles.itemsContainer}>
                    {items}
                </div>
            </div>
        ) : (
            <div id={styles.container}>
                <Header var={'diff'} />
                <div id={styles.itemsContainer}>
                    No hay elementos a monstrar
                </div>
            </div>
        )
    )
}
