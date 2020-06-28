import {useMediaQuery} from "@material-ui/core";
import {Datagrid, EditButton, List, SimpleList, TextField} from "react-admin";
import * as React from "react";

const NodeList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => `Node No. ${record.node_id}`}
                    tertiaryText={record => record.node_name}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="node_id"/>
                    <TextField source="node_name"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
};

export default NodeList;
