import React, { useEffect, useState } from 'react'
import Rating from '@material-ui/lab/Rating'
import styles from './Product.module.css'
import Header from '../../components/HeaderBis'
import { Tooltip } from '@material-ui/core'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import img1 from '../../assets/backgrounds/1.jpg'
import img2 from '../../assets/backgrounds/2.jpg'
import img3 from '../../assets/backgrounds/3.jpg'
import img4 from '../../assets/backgrounds/4.jpg'
import img5 from '../../assets/backgrounds/5.jpg'
import img6 from '../../assets/backgrounds/6.jpg'
import img7 from '../../assets/backgrounds/7.jpg'
import img8 from '../../assets/backgrounds/8.jpg'
import img9 from '../../assets/backgrounds/9.jpg'
import img10 from '../../assets/backgrounds/10.jpg'
import img11 from '../../assets/backgrounds/11.jpg'

export default function Product() {
    const bgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState({ id: '', title: '', images: [], rating: 0, description: '', sport: '', store: '', caracteristicas: { peso: 0, talla: 0, creador: '' }, tags: [] })
    let elemId = window.location.href.split('/')[window.location.href.split('/').length - 1]

    useEffect(() => {
        if (item.id === '') {
            fetch(`https://toutsport-api.herokuapp.com/list/${elemId}`)
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

    const handleClick = () => {
        navigator.clipboard.writeText(`https://toutsport.netlify.app/product/${elemId}`)
        handleTooltipOpen()
    }

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)
        setTimeout(() => {
            handleTooltipClose()
        }, 3000)
    }

    return (
        <div id={styles.mainContainer} style={{ backgroundImage: `url("${bgArr[Math.floor(Math.random() * 12)]}")` }}>
            <Header var={'diff'} />
            <div id={styles.container}>
                <div id={styles.textContainer}>
                    <h2 className={styles.textSubContainer} id={styles.title}>{item.title}</h2>
                    <div className={styles.textSubContainer}>
                        <Rating name="rating-read" size="large" max={5} value={item.rating} precision={0.5} readOnly />
                    </div>
                    <div className={styles.textSubContainer}>
                        <div className={styles.textSubContainer}>
                            <p id={styles.text}>Peso:</p>
                            <p>{item.caracteristicas.peso}gr</p>
                        </div>
                        <div className={styles.textSubContainer}>
                            <p id={styles.text}>Talla:</p>
                            <p>{item.caracteristicas.talla}</p>
                        </div>
                    </div>
                    <div className={styles.textSubContainer}>
                        <div className={styles.textSubContainer}>
                            <p id={styles.text}>Deporte:</p>
                            <p>{item.sport}</p>
                        </div>
                        <div className={styles.textSubContainer}>
                            <p id={styles.text}>Tienda:</p>
                            <p>{item.store}</p>
                        </div>
                    </div>
                    <div className={styles.textSubContainer}>
                        <p id={styles.description}>{item.description}</p>
                    </div>
                    <div className={styles.textSubContainer}>
                        <Tooltip
                            title='Copiado al portapapeles'
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                        >
                            <div className={styles.shareBtn} onClick={() => handleClick()}>Compartir</div>
                        </Tooltip>
                    </div>
                </div>
                <div id={styles.imgContainer}>
                    <InnerImageZoom alt='Imagen del Producto' className={styles.image} src={item.images[0]} zoomScale={0.9} />
                </div>
            </div>
        </div>
    )
}
