// Tutorial: https://marmelab.com/react-admin/Tutorial.html
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import users from './users';
import drones from './drones';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';

const App = () => (
    <Admin
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        layout={Layout}
    >
        <Resource name="users" {...users} />
        <Resource name="drones" {...drones} />
    </Admin>
);
export default App;
