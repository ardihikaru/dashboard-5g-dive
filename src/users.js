import * as React from "react";
// import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput,
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm,
    // TextInput, SelectInput, Create, Filter, SimpleList } from 'react-admin';
    TextInput, Create, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

// const UserFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
//             <SelectInput optionText="name" />
//         </ReferenceInput>
//     </Filter>
// );

// export const UserList = props => (
export const UserList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        // <List filters={<UserFilter />} {...props}>
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.user}
                    secondaryText={record => `${record.email} views`}
                    tertiaryText={record => new Date(record.create_time).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    {/*<ReferenceField label="User" source="userId" reference="users">*/}
                    {/*    <TextField source="name"/>*/}
                    {/*</ReferenceField>*/}
                    <TextField source="name"/>
                    <TextField source="username"/>
                    <TextField source="email"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
// );
};

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/*<ReferenceInput source="userId" reference="users">*/}
            {/*    <SelectInput optionText="name" />*/}
            {/*</ReferenceInput>*/}
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            {/*<TextInput multiline source="body" />*/}
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/*<ReferenceInput source="userId" reference="users">*/}
            {/*    <SelectInput optionText="name" />*/}
            {/*</ReferenceInput>*/}
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="password_confirm" />
            {/*<TextInput multiline source="body" />*/}
        </SimpleForm>
    </Create>
);
