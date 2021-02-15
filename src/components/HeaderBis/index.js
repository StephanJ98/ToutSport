import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import styles from './HeaderBis.module.css'
import { CategoryContext } from '../../Context/CategoryContext'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'
import { FaSearch } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io"
import logo from '../../assets/logo/ToutSport_Horizontal.png'

export default function HeaderBis() {
    const [openPanel, setOpenPanel] = useState(false)
    const [search, setSearch] = useState('')
    const { changeCategory } = useContext(CategoryContext)
    let history = useHistory()

    const handleSetCategoria = (elem) => {
        changeCategory(elem)
        setOpenPanel(false)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = search.toLowerCase().trimStart().replace(/ /g,'_')
        setSearch('')
        handleSetCategoria(data)
    }

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div id={styles.header}>
            <section id={styles.searchContainerBis}>
                <img id={styles.headerTitle} src={logo} onClick={handleClick} alt='Logo ToutSport Todo para Deportistas'/>
                <div id={styles.search}>
                    <div id={styles.headerSearchBtn} onClick={() => setOpenPanel(true)}>
                        <FaSearch id={styles.headerSearchIcon} />
                    </div>
                </div>
            </section>
            <section>
                <SlidingPanel
                    type={'right'}
                    isOpen={openPanel}
                    size={25}
                >
                    <div id={styles.tagsContainer}>
                        <div id={styles.searchInput} className={styles.tags}>
                            <form id={styles.searchForm} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    maxLength='50'
                                    value={search}
                                    onChange={handleSearch}
                                />
                            </form>
                        </div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('running')}>
                            <p>Running</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('ciclismo')}>
                            <p>Ciclismo</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('tennis')}>
                            <p>Tennis</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('baloncesto')}>
                            <p>Baloncesto</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('futbol')}>
                            <p>Futbol</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('rugby')}>
                            <p>Rugby</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('artes marciales')}>
                            <p>Artes Marciales</p>
                        </div>
                        <IoIosCloseCircleOutline id={styles.closeBtn} onClick={() => setOpenPanel(false)} />
                    </div>
                </SlidingPanel>
            </section>
        </div>
    )
}
