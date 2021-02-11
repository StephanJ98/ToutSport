import React from 'react'
import styles from './Admin.module.css'
import Header from '../../components/HeaderBis'

export default function Admin() {
    return (
        <div id={styles.container}>
            <Header id={styles.header}/>
        </div>
    )
}
