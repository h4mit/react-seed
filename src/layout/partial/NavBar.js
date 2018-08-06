import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageToggle from '../../i18n/switcher/lang-switcher';
import { withLocalize, Translate } from 'react-localize-redux';

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
                        <Translate>
                            {({ translate }) => (
                                <p>{translate("APP.name")}</p>
                            )}
                        </Translate>
                        </Typography>
                        <Button color="inherit" href="/dashboard"><Translate>
                            {({ translate }) => (
                                <p>{translate("APP.dashboard")}</p>
                            )}
                        </Translate></Button>
                        <Button color="inherit" href="/dashboard/list"><Translate>
                            {({ translate }) => (
                                <p>{translate("APP.list")}</p>
                            )}
                        </Translate></Button>
                        <Button color="inherit" href="/home"><Translate>
                            {({ translate }) => (
                                <p>{translate("APP.back")}</p>
                            )}
                        </Translate></Button>
                        <LanguageToggle />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withLocalize(NavBarLayout);
