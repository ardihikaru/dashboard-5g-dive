import {useMediaQuery} from "@material-ui/core";
import {Datagrid, List, SimpleList, TextField, ReferenceField} from "react-admin";
import * as React from "react";

const FrameList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        // <List filters={<UserFilter />} {...props}>
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    // primaryText=
                    //     {record =>
                    //         <ReferenceField
                    //             label="drone_id"
                    //             source="droneId"
                    //             reference="drones"
                    //             basePath="droneId"
                    //             record={record}>
                    //             <TextField source="droneId" />
                    //         </ReferenceField>
                    //     }
                    primaryText={record => record.frame_id}
                    secondaryText=
                        {record =>
                            <ReferenceField
                                label="node_name"
                                source="node_id"
                                reference="nodes"
                                basePath="node_name"
                                record={record}>
                                <TextField source="node_name" />
                            </ReferenceField>
                        }
                    // secondaryText={record => record.frame_name}
                    tertiaryText={record => `FrameID '${record.frame_id}'`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <ReferenceField label="drone_name" source="drone_id" reference="drones">
                        <TextField source="drone_name" />
                    </ReferenceField>
                    <ReferenceField label="node_name" source="node_id" reference="nodes">
                        <TextField source="node_name"/>
                    </ReferenceField>
                    <TextField source="frame_id"/>
                    <TextField source="frame_name"/>
                </Datagrid>
            )}
        </List>
    );
// );
};

export default FrameList;
