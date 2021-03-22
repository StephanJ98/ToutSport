import React, { useState, useEffect, useContext } from 'react'
import styles from './AllCategories.module.css'
import { useHistory } from "react-router-dom"
import { CategoryContext } from '../../Context/CategoryContext'
import Header from '../../components/HeaderBis'

export default function AllCategories() {
    const [data, setData] = useState([])
    const { changeCategory } = useContext(CategoryContext)
    let history = useHistory()
    let item = []

    useEffect(() => {
        if (data.length === 0) {
            fetch(`https://toutsport-api.herokuapp.com/categories`)
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
    })
    if (data.length > 0) {
        data.forEach(element => {
            item.push(
                <div className={styles.card} key={Math.random() * 100} onClick={() => handleSetCategoria(element)}>
                    <p>{element}</p>
                </div>
            )
        })
    }

    const handleSetCategoria = async (elem) => {
        await changeCategory(elem)
        history.push("/cat")
    }

    return (
        <div id={styles.container}>
            <Header var={'normal'} />
            <div id={styles.dataContainer}>
                {item}
            </div>
        </div>
    )
}
