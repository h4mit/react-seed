import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';;

class NavBarLayout extends Component {
    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                        React Seed
                        </Typography>
                        <Button color="inherit" href="/dashboard">
                            Dashboard
                        </Button>
                        <Button color="inherit" href="/dashboard/list">
                           List
                        </Button>
                        <Button color="inherit" href="/home">
                            Home
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBarLayout;
