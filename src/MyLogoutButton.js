import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout, useTranslate } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import {ListItemIcon, makeStyles} from "@material-ui/core";

const MyLogoutButton = forwardRef((props, ref) => {

    const useStyles = makeStyles(theme => ({
        menuItem: {
            color: theme.palette.text.secondary,
        },
        icon: { minWidth: theme.spacing(5) },
    }));
    const classes = useStyles();
    const translate = useTranslate();

    const logout = useLogout();
    const handleClick = () => logout();
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
        >
            <ListItemIcon className={classes.icon}>
                <ExitIcon />
            </ListItemIcon>
            { translate('simple.logout-button', "Logout")}
        </MenuItem>
    );
});

export default MyLogoutButton;
