// Tutorial: https://marmelab.com/react-admin/Tutorial.html
import * as React from "react";
// import { Admin } from 'react-admin';
// import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
// import { Admin, Resource, EditGuesser } from 'react-admin';
// import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
// import { PostList } from './posts';
import { PostList, PostEdit, PostCreate } from './posts';
// import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
    // <Admin dataProvider={dataProvider}>
    // <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {/*<Resource name="posts" list={ListGuesser} />*/}
        {/*<Resource name="posts" list={PostList} />*/}
        {/*<Resource name="posts" list={PostList} edit={EditGuesser} />*/}
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        {/*<Resource name="users" list={ListGuesser} />*/}
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        {/*<Resource name="users" list={UserList} icon={UserIcon} />*/}
    </Admin>
);
export default App;
