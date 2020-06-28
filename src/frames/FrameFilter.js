import {Filter, ReferenceInput, TextInput, SelectInput} from "react-admin";
import * as React from "react";

const FrameFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput source="droneId" reference="drones" allowEmpty>
            <SelectInput optionText="drone_name" />
        </ReferenceInput>
        <ReferenceInput source="nodeId" reference="nodes" allowEmpty>
            <SelectInput optionText="node_name" />
        </ReferenceInput>
    </Filter>
);

export default FrameFilter;
