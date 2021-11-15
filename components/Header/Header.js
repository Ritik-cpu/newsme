import React from 'react'
import Container from '@mui/material/Container'
import styles from '../../styles/header/Header.module.css'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <Typography variant="h3" color="initial">
                    MY-NEWS
                </Typography>
                {/* date */}
                {/* temprature corona cases */}
                <Divider/>
            </div>
            <div className={styles.navbar}>
                <Navbar/>
                {/* menu \\ appbar*/}
            </div>
            <div className={styles.add}>
                <Typography variant="subtitle2" color="initial">
                    addsense
                </Typography>
                {/* add 728*90 */}
            </div>
        </div>
    )
}
