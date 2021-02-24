import React from 'react'
import styles from './Categories.module.css'
import Header from '../../components/HeaderBis'
import ItemsContainer from '../../components/ItemsContainer'


export default function Categories() {
    return (
        <div id={styles.container}>
            <Header var={'normal'} />
            <ItemsContainer />
        </div>
    )
}
