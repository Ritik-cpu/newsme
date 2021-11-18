import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from '../../styles/section/RightSection.module.css'
import { Typography, TextField, Divider, CardMedia, Grid, } from '@mui/material'
import { Box, style } from '@mui/system'
import TabsDesign from '../tabing/TabsDesign'
import TweetEmbed from 'react-tweet-embed'

export default function RightSection() {
    return (
        <div className={styled.main}>
            <div className={styled.social}>
               <div className={styled.Wrap}>
                    <Twitter sx={{color:'#2196f3'}} className={styled.icons}/>
                    <div>
                        <Typography variant="h5" color="initial">Twitter</Typography>
                        <Typography variant='body1' color='initial'>345</Typography>
                    </div>
               </div>
               <div className={styled.Wrap}>
                    <Facebook sx={{color:'#3f51b5'}} className={styled.icons}/>
                    <div>
                        <Typography variant="h5" color="initial">Facebook</Typography>
                        <Typography variant='body1' color='initial'>3654</Typography>
                    </div>
               </div>
               <div className={styled.Wrap}>
                    <Instagram sx={{color:'#f50057'}} className={styled.icons}/>
                    <div>
                        <Typography variant="h5" color="initial">Instagram</Typography>
                        <Typography variant='body1' color='initial'>3545</Typography>
                    </div>
               </div>
            </div>
            <Divider/>
            <div className={styled.containSearch}>
                <Box sx={{display:'flex'}}>
                    <LinkedIn className={styled.icons} sx={{color:'#3f51b5'}} />
                    <Typography variant="h5" color="initial">LinkedIn</Typography>
                </Box>
                <Box sx={{display:"flex"}}>
                    <YouTube className={styled.icons} sx={{color:'red'}}/>
                    <Typography variant="h5" color="initial">YouTube</Typography>
                </Box>
                <TextField
                  id=""
                  label=""
                //   value={}
                //   onChange={}
                  
                />
            </div>
            <Divider />
            <Typography variant="h4" color="initial">videos</Typography>

            <Grid sx={{marginTop:'10px', marginBottom:'10px'}} container spacing={2}>
                <Grid item xs={6}>
                <CardMedia component='img' title="" image="https://images.unsplash.com/photo-1633837145347-a758fb218a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />
                </Grid>
                <Grid item xs={6}>
                <CardMedia component='img' title="" image="https://images.unsplash.com/photo-1633837145347-a758fb218a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />

                </Grid>
                <Grid item xs={6}>
                <CardMedia component='img' title="" image="https://images.unsplash.com/photo-1633837145347-a758fb218a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />

                </Grid>
                <Grid item xs={6}>
                <CardMedia component='img' title="" image="https://images.unsplash.com/photo-1633837145347-a758fb218a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />
                </Grid>
            </Grid>
            <Divider/>
            {/* tabs */}
            <TabsDesign/>
            <Divider/>
            <div className="twitembed">
                <Typography variant="h5" color="initial">twitter emabed</Typography>
                <TweetEmbed id='1460250141747826694' options={{cards:'hidden'}}/>
            </div>
            {/* add box */}
            <div className={styled.addbox}>
                addsens
            </div>
        </div>
    )
}




