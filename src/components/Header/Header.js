import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import styles from './Header.module.css'
import { CategoryContext } from '../../Context/CategoryContext'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'
import { FaSearch } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io"
import logo from '../../assets/logo/ToutSport_Horizontal.png'

export default function Header(props) {
    const [openPanel, setOpenPanel] = useState(false)
    const [search, setSearch] = useState('')
    const { changeCategory } = useContext(CategoryContext)
    let history = useHistory()
    let display = styles.header

    if (props.display !== 'normal') {
        display = styles.headerNone
    }

    const handleSetCategoria = async (elem) => {
        await changeCategory(elem)
        history.push("/cat")
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = search.toLowerCase().trimStart()
        console.log(data)
        setSearch('')
        //history.push("/cat")
    }

    const handleViewAll = () => {
        history.push("/all")
    }

    return (
        <div id={display}>
            <section id={styles.searchContainer}>
                <img id={styles.headerTitle} src={logo} alt='Logo ToutSport Todo para Deportistas' />
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
                            Running
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('ciclismo')}>
                            Ciclismo
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('tennis')}>
                            Tennis
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('baloncesto')}>
                            Baloncesto
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('futbol')}>
                            Futbol
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleSetCategoria('rugby')}>
                            Rugby
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.tags} onClick={() => handleViewAll()}>
                            Ver Todas
                        </div>
                        <IoIosCloseCircleOutline id={styles.closeBtn} onClick={() => setOpenPanel(false)} />
                    </div>
                </SlidingPanel>
            </section>
        </div>
    )
}
