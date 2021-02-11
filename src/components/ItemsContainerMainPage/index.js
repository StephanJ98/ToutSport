import React from 'react'
import styles from './ItemsContainerMainPage.module.css'
import data from '../../assets/data/data.js'

export default function ItemsContainerMainPage() {
    const items = []
    data.forEach(item => {
        if (items.length <= 7) {
            items.push(
                <div key={item.id} className={styles.itemContainerMainPage}>
                    <img className={styles.imageItemContainerMainPage} src={item.image} alt={item.title} />
                    <p className={styles.textMainPage}>{item.title.toLowerCase()}</p>
                </div>
            )
        }
    }
    )

    return (
        <section id={styles.itemsContainerMainPage}>
            {items}
        </section>
    )
}
