import React from 'react'
import styles from '../../styles/layout/Layout.module.css'

import Header from '../Header/Header'
import Container from '@mui/material/Container'
import { Box, margin } from '@mui/system'
import RightSection from '../sections/RightSection'
import Footer from '../footer/Footer'




export default function Layout({children}) {
    return (
       <div >
           <div className={styles.main}>
           
           <Container className={styles.Left}  maxWidth='lg'>
                   <div className={styles.header}>
                   <Header/>
                {children}
                   </div>
                
           </Container>
           <Container  sx={{height:'100%'}} maxWidth='sm'>
                <RightSection/>
           </Container>
           </div>
           <div className={styles.footer}>
               <Footer/>
           </div>
       </div>
    )
}
