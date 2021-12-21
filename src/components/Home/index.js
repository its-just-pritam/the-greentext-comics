import { React } from 'react';
import { Container } from '@mui/material';
import HomeBody from '../HomeBody';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GTClogo from '../../home/images/GTC.png';

const menu = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/_towlschii_/'
    },
    {
        name: 'Tumblr',
        link: 'https://thegreentextcomics.tumblr.com/'
    },
    {
        name: 'Patreon',
        link: 'https://www.instagram.com/_towlschii_/'
    },
];
const mystyle = {
    textDecoration: "none",
    color: "white"
};

function appBarLabel(label) {

    if( window.innerWidth < 400 )
    return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <img src={GTClogo} alt='GTC logo' height='25px' />
            </IconButton>
            {menu.map((page) => (
                <div style={{margin: "0 10px 0 10px"}}>
                    <a href={page.link} target="_blank" style={mystyle}>{page.name}</a>
                </div>
                ))}
        </Toolbar>
        );
    else
        return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <img src={GTClogo} alt='GTC logo' height='30px' />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {label}
            </Typography>
            {menu.map((page) => (
                <div style={{margin: "0 10px 0 10px"}}>
                    <a href={page.link} target="_blank" style={mystyle}>{page.name}</a>
                </div>
                ))}
        </Toolbar>
        );
  }
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export default function Home({...restProps}) {
    return (
        <>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" color="primary">
                        {appBarLabel('THE GREENTEXT COMICS')}
                    </AppBar>
                </ThemeProvider>
            </Stack>
            <div style={{ backgroundColor: 'black' }}>
                <Container>
                    <HomeBody />
                </Container>
            </div>
        </>
    );
}