import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    avatar: {
        background: 'url(/logo_horizontal.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 110,
        alignItems: 'center',
    },
    icon: { display: 'none' },
});

const CustomLoginForm = withStyles({
    button: { background: '#F15922' },
})(LoginForm);

const CustomLoginPage = props => (
    <Login
        loginForm={<CustomLoginForm />}
        {...props}
    />
);

export default withStyles(styles)(CustomLoginPage);
