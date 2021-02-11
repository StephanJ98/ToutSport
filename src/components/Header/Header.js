import React, { useState, useContext } from 'react'
import { Link, useHistory  } from "react-router-dom"
import styles from './Header.module.css'
import { CategoryContext } from '../../Context/CategoryContext'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'
import { FaSearch } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io"
import logo from '../../assets/logo/ToutSport_Horizontal.png'

export default function Header() {
    const [openPanel, setOpenPanel] = useState(false)
    const [search, setSearch] = useState('')
    const { changeCategory } = useContext(CategoryContext)
    let history = useHistory()

    const handleSetCategoria = (elem) => {
        changeCategory(elem)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = search.toLowerCase().trimStart().replace(/ /g, '_')
        setSearch('')
        handleSetCategoria(data)
        history.push("/cat")
    }

    return (
        <div id={styles.header}>
            <section id={styles.searchContainer}>
                <img id={styles.headerTitle} src={logo}/>
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
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('running')}>
                            Running
                        </Link>
                        <div className={styles.separator}></div>
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('ciclismo')}>
                            Ciclismo
                        </Link>
                        <div className={styles.separator}></div>
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('tennis')}>
                            Tennis
                        </Link>
                        <div className={styles.separator}></div>
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('baloncesto')}>
                            Baloncesto
                        </Link>
                        <div className={styles.separator}></div>
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('futbol')}>
                            Futbol
                        </Link>
                        <div className={styles.separator}></div>
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('rugby')}>
                            Rugby
                        </Link>
                        <div className={styles.separator}></div>
                        <Link to="/cat" className={styles.tags} onClick={() => handleSetCategoria('artes marciales')}>
                            Artes Marciales
                        </Link>
                        <IoIosCloseCircleOutline id={styles.closeBtn} onClick={() => setOpenPanel(false)} />
                    </div>
                </SlidingPanel>
            </section>
        </div>
    )
}
