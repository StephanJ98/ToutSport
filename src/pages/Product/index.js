import React, { useState } from 'react'
import data from '../../assets/data/data.js'

export default function Product() {
    let e = window.location.href.split('/')
    let el = e[e.length - 1]
    let exit = false
    let count = 0
    const [item, setItem] = useState({ id: '', image: '', title: '', sport: '', store: '', price: 0 })

    if ((item.id === '') && (el <= data.length - 1)) {
        while ((exit !== true) || (count <= data.length - 1)) {
            if (data[count].id === data[el].id) {
                exit = true
                setItem({ id: data[count].id, image: data[count].image, title: data[count].title, sport: data[count].sport, store: data[count].store, price: data[count].price })
            }
            count++
        }
    }

    return (
        <div>
            <p>{item.title}</p>
            <p>{item.sport}</p>
            <p>{item.store}</p>
            <p>{item.price}</p>
            <img src={item.image} width='100' height='100' alt='product'/>
        </div>
    )
}
