import {Create, SimpleForm, TextInput, ReferenceInput, SelectInput} from "react-admin";
import * as React from "react";

const FrameCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="droneId" reference="drones">
                <SelectInput optionText="drone_name" />
            </ReferenceInput>
            <ReferenceInput source="nodeId" reference="nodes">
                <SelectInput optionText="node_name" />
            </ReferenceInput>
            <TextInput source="frame_id" />
            <TextInput source="frame_name" />
        </SimpleForm>
    </Create>
);

export default FrameCreate;
