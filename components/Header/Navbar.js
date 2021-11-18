import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { List, ListItemButton, ListItemText } from '@mui/material';
 
  const useStyles = makeStyles((theme) => ({
    navbar:{
    
    },
    listFlex:{
      display:'flex'
    },
    iconHide:{
      display:'none',
    }
}));

export default function Navbar() {
  const {navbar, listFlex,iconHide}=useStyles();
  return (
    // <Box sx={{ flexGrow: 1, }}>
      <AppBar className={navbar} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={iconHide}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <List className={listFlex}>
            <ListItemButton>
            <a href="#">INDIA</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">BUSINESS</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">TECH</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">SCIENCE</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">SPORT</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">VIDEO</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">ENTERTAINMENT</a>
            </ListItemButton>
            <ListItemButton>
            <a href="#">WORLD</a>
            </ListItemButton>
          </List>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}



// here component css
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  zIndex:'100',
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
