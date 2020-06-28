// Tutorial: https://marmelab.com/react-admin/Tutorial.html
import * as React from "react";
// import { fetchUtils, Admin, Resource } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import users from './users';
import drones from './drones';
import nodes from './nodes';
import frames from './frames';
import Dashboard from './dashboard/Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';
import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';

const App = () => (
    <Admin
        dashboard={Dashboard}
        loginPage={MyLoginPage}
        logoutButton={MyLogoutButton}
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        layout={Layout}
    >
        <Resource name="users" {...users} />
        <Resource name="drones" {...drones} />
        <Resource name="nodes" {...nodes} />
        <Resource name="frames" {...frames} />
    </Admin>
);
export default App;
