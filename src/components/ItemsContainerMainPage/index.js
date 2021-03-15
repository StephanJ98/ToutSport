import React, { useEffect, useState } from 'react'
import styles from './ItemsContainerMainPage.module.css'
import { useHistory } from "react-router-dom"

export default function ItemsContainerMainPage() {
    const [data, setData] = useState([])
    let items = []
    let history = useHistory()

    useEffect(() => {
        if (data.length === 0 || data.length === undefined) {
            fetch(`https://toutsport-api.herokuapp.com/list`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setData(result)
                    },
                    (error) => {
                        setData([])
                        console.log(error)
                    }
                )
        }
    }, [data.length])

    const handleClick = async (id) => {
        fetch(`https://toutsport-api.herokuapp.com/list/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result)
                },
                (error) => {
                    setData([])
                    console.log(error)
                }
            )
        await history.push(`/product/${id}`)
    }

    if (data.length > 1) {
        data.forEach(item => {
            if (items.length <= 7) {
                items.push(
                    <div key={item.id} className={styles.itemContainerMainPage} onClick={() => handleClick(item.id)}>
                        <img className={styles.imageItemContainerMainPage} src={item.images[0]} alt={item.title} />
                        <p className={styles.textMainPage}>{item.title.toLowerCase()}</p>
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
