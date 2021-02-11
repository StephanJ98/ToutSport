import React from 'react'
import { Link } from 'react-router-dom'
import { IoCaretBack } from "react-icons/io5";
import styles from './Video.module.css'
import video from '../../assets/video/sport.mp4'
import HeaderSpec from '../../components/HeaderSpec';

export default function Video() {
    return (
        <div id={styles.containerVideo}>
            <HeaderSpec />
            <video id={styles.video} src={video} width="900" autoPlay={true} muted={true} loop={true} controls={true}></video>
            <Link id={styles.backBtn} to='/'> <IoCaretBack /> </Link>
            <p id={styles.text}>Por Cosas así nos gusta el Deporte</p>
        </div>
    )
}
