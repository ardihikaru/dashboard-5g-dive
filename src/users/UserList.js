import {useMediaQuery} from "@material-ui/core";
import {Datagrid, EditButton, List, SimpleList, TextField} from "react-admin";
import * as React from "react";
// import UserEdit from "./UserEdit";

const UserList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        // <List filters={<UserFilter />} {...props}>
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.email}
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

export default UserList;
