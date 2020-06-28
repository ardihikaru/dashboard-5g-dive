// Tutorial: https://marmelab.com/react-admin/Tutorial.html
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import users from './users';
// import { PostList, PostEdit, PostCreate } from './posts';
// import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
    // <Admin dataProvider={dataProvider}>
    // <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Admin
        dashboard={Dashboard}
        // loginPage={login}
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        layout={Layout}
    >
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />*/}
        <Resource name="users" {...users} />
    </Admin>
);
export default App;
