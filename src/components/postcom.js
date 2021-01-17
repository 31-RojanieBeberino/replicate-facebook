import React from 'react'
import {
    Typography,
    CssBaseline,
    useScrollTrigger,
    Box,
    Container,
    IconButton,
    Avatar,
    Card,
    Divider,
    Button,
    ButtonGroup
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Profile from '../img/ava.jpg';

const postCard = makeStyles ( (theme) =>({ 
    contain: {
        height: '100vh',
        margin: '27% auto'
    },
    cardContent: {
        minWidth:'100%',
        borderRadius: 0,
        boxShadow: 0
    },
    postItem: {
        margin: theme.spacing(2)
    },
    profileStyle:{
        margin: theme.spacing(1.2),
        width: 31,
        height: 31
    },
    postButton: {
        width: '100%'
    }
}))

const buttonPost = [
    {
        btnPosts: <VideocamIcon style={{color: '#CC0000', width: 20, height: 20}} />

    },
    {
        btnPosts: <PhotoSizeSelectActualIcon style={{color: '#7DFA35'}} />
    },
    {
        btnPosts: <VideoCallIcon style={{color: '#8E44AD '}} />
    },
];
const postcom = () => {
    const classes = postCard ();
    return (
        <Box className={classes.contain}>
            <Card className={classes.cardContent} >
                <Avatar className={classes.profileStyle} src={Profile} />
                <Divider />
                    <Box variant="text" style={{display: 'flex', justifyContent: 'space-around', height: 30}} color="default" aria-label="text primary button group">
                        {buttonPost.map((btn, key) => (
                            <Button key={key} className={classes.postButton}> {btn.btnPosts} </Button>
                        ))}
                    </Box>
            </Card>
        </Box>
    )
}

export default postcom
