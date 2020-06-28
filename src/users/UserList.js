import {useMediaQuery} from "@material-ui/core";
import {Datagrid, EditButton, List, SimpleList, TextField, EmailField} from "react-admin";
import * as React from "react";

const UserList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
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
                    <TextField source="name"/>
                    <TextField source="username"/>
                    <EmailField source="email"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
};

export default UserList;
