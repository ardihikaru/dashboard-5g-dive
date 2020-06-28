import {useMediaQuery} from "@material-ui/core";
import {Datagrid, List, SimpleList, TextField, ReferenceField} from "react-admin";
import * as React from "react";
import FrameFilter from './FrameFilter';

const FrameList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<FrameFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText=
                        {record =>
                            <ReferenceField
                                label="drone_name"
                                source="drone_id"
                                reference="drones"
                                basePath="drone_id"
                                record={record}>
                                 <TextField source="drone_name" />
                             </ReferenceField>
                         }
                    secondaryText=
                        {record =>
                            <ReferenceField
                                label="node_name"
                                source="node_id"
                                reference="nodes"
                                basePath="node_id"
                                record={record}>
                                <TextField source="node_name" />
                            </ReferenceField>
                        }
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
