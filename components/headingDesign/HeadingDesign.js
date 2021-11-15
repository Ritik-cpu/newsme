import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button'

const useStyles = makeStyles({
  root: {
    display:'flex',
    padding:'16px 0',
    alignItems:'center',
    whiteSpace:'nowrap'
  },
  
  textDesign:{
      textTransform:"uppercase",
      fontWeight:'600',
      color:'#f50057',
      fontSize:'20px',
      marginRight:'10px',
  },
  rightLine:{
    width:'100%',
    height:'16px',
    background:'#00acc1'
  }
});


export default function HeadingDesign({text}) {
    const {root,left, textDesign, rightLine}=useStyles()
    return (
      <div className={root}>
        <Button className={textDesign} variant="outline">  
           {text}        
         </Button>
          <div className={rightLine}></div>
      </div>
    )
}
