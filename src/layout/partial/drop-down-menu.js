import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

const styles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
    primary: {},
    icon: {},
  });

function DropDownMenu(props) {
    const { classes } = props;
    return (
        <WithState>
            {({ anchorEl, updateAnchorEl }) => {
                const open = Boolean(anchorEl);
                const handleClose = () => {
                    updateAnchorEl(null);
                };

                return (
                    <React.Fragment>
                        <Button
                            aria-owns={open ? 'render-props-menu' : null}
                            aria-haspopup="true"
                            onClick={event => {
                                updateAnchorEl(event.currentTarget);
                            }}
                        >
                            Open Menu
            </Button>
                        <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon className={classes.icon}>
                                    <ThreeDRotation />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Profile" />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </React.Fragment>
                );
            }}
        </WithState>
    );
}

export default withStyles(styles)(DropDownMenu);