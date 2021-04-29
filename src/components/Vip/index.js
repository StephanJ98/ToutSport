import React, { useEffect, useState } from 'react'
import styles from './Vip.module.css'
import { useHistory } from "react-router-dom"

export default function Vip(props) {
    let history = useHistory()

    const id = props.id
    const [item, setItem] = useState({ id: '', title: '', images: [], rating: 0, description: '', sport: '', store: '', caracteristicas: { peso: 0, talla: 0, creador: '' }, tags: [] })
    
    useEffect(() => {
        if (item.id === '') {
            fetch(`https://toutsport-api.herokuapp.com/list/${id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setItem(result)
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

    return (
        <div className={styles.container} onClick={() => handleClick(item._id)}>
            <p className={styles.text}>{item.title}</p>
            <img className={styles.image} src={item.images[0]} alt={item.title} />
        </div>
    )
}
