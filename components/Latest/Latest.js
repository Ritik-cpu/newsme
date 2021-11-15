import React from 'react'
import styles from '../../styles/Latest/Latest.module.css'
import CardFirst from '../cardDesign/CardFirst'
import HeadingDesign from '../headingDesign/HeadingDesign'



export default function Latest() {
    return (
        <div className={styles.latest}>
            <HeadingDesign text='latest news'/>
            <div className={styles.cardWrap}>
                <CardFirst/>
                <CardFirst/>
                <CardFirst/>
            </div>
            <div className={styles.twoCard}>
                <CardFirst/>
                <CardFirst/>
            </div>
 
            {/* three card */}
        </div>
    )
}
