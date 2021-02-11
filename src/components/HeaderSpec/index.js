import React from 'react'
import styles from './HeaderSpec.module.css'
import { FaSearch } from "react-icons/fa";

export default function HeaderSpec() {
    return (
        <div id={styles.headerSpec}>
            <section id={styles.searchContainerSpec}>
                <p id={styles.headerTitleSpec}>ToutLeSport</p>
                <div id={styles.searchSpec}>
                    <input id={styles.headerSearchSpec} type="text" maxLength='50' />
                    <button id={styles.headerSearchBtnSpec} type="submit">
                        <FaSearch id={styles.headerSearchIconSpec}/>
                    </button>
                </div>
            </section>
        </div>
    )
}
