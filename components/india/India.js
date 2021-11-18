import { Box } from '@mui/system'
import React from 'react'
import CardFirst from '../cardDesign/CardFirst'
import CardTwo from '../cardDesign/CardTwo'
import HeadingDesign from '../headingDesign/HeadingDesign'

export default function India() {
    return (
        <div >
            <HeadingDesign text='India'/>
            <Box sx={{display:'flex'}}>
            <Box>
            <CardFirst/>
            <CardFirst/>
            </Box>
            <Box >
                <CardTwo/>
                <CardTwo/>
            </Box>
            </Box>
            
            <CardTwo/>
        </div>
    )
}
