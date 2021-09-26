import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function appBar(props) {
    const {title} = props;
    return (
        <>
            <AppBar position="static" className='appBar'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <h2 className='center-text'>
                        {title}</h2>
                </Toolbar>
            </AppBar>
        </>

    )
}
export default appBar
