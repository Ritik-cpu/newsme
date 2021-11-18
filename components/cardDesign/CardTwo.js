import { Title } from '@mui/icons-material'
import { Card, Container, CardMedia, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CardTwo() {
    return (
            <Box sx={{display:'flex', margin:'10px'}}>
                <CardMedia component='img' width='60%' height='200' title="" image="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" />
                <CardContent>
                    <Typography variant="h5" color="initial">
                    best suited for magazine, news or blog websites
                    </Typography>
                    <Typography variant="subtitle2" color="initial">
                    responsive HTML magazine template, best suited for magazine, news or blog websites. It is packed with tons of features and custom widgets.
                    </Typography>
                </CardContent>
            </Box>
    )
}
