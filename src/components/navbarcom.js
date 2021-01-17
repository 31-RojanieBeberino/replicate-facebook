import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    useScrollTrigger,
    Box,
    Container,
    IconButton,
    Badge,
    Tabs,
    Tab,
    Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GamesIcon from '@material-ui/icons/Games';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import Icon from '@material-ui/core/Icon';
import { useMediaQuery } from "react-responsive";

const navStyle = makeStyles ( (theme) => ({
    nav: {
        marginRight: theme.spacing(2),
        fontWeight: 900,
        fontFamily: 'Righteous'
    },
    positionIcon: {
        width: '100%'
    },
    icons:{
        float: 'right',
        width: 40,
        height: 40
    },
    buttons: {
        background: 'whitesmoke', 
        borderRadius: '50%',
        padding: 4,
        width: 30,
        height: 30
    },
    navBottom: {
        display: 'flex', 
        width: '100%', 
        justifyContent: 'space-around'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      }
})) 
const navListButtons = [
    {
        navcon: <HomeIcon/>
    },
    {
        navcon: <SupervisedUserCircleIcon/>
    },
    {
        navcon: <OndemandVideoIcon/>
    },
    {
        navcon: <GamesIcon/>
    },
    {
        navcon: <NotificationsIcon/>
    }
];
const Navbar = () => {
    const classes = navStyle ();
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
      setValue(newValue);

    }
    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" style={{background: 'white', boxShadow: 'none'}}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="primary" className={classes.nav}>
                        facebuok
                    </Typography>
                    <Box className={classes.positionIcon}>
                        <IconButton className={classes.icons} color="default">
                            <MailIcon className={classes.buttons}/>
                        </IconButton>
                        <IconButton className={classes.icons}  color="default">
                            <SearchIcon className={classes.buttons}/>
                        </IconButton>
                    </ Box>
                </Toolbar>
                <Box>
                    <Tabs   
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="icon tabs example" 
                        className={classes.navBottom}
                       >
                           {navListButtons.map((menu, key) => (
                               <Tab color="primary" key={key} icon={menu.navcon}/>
                           ))}
                    </ Tabs>
                </Box>
                <Divider/>
            </AppBar>
        </Box>
    )

}

export default Navbar;