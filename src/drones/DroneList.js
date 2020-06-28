import {useMediaQuery} from "@material-ui/core";
import {Datagrid, EditButton, List, SimpleList, TextField} from "react-admin";
import * as React from "react";

const DroneList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.drone_name}
                    secondaryText={record => `Drone No. ${record.drone_id}`}
                    tertiaryText={record => new Date(record.create_time).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="drone_id"/>
                    <TextField source="drone_name"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
};

export default DroneList;
