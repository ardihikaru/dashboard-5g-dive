import {Create, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

const NodeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="node_id" />
            <TextInput source="node_name" />
        </SimpleForm>
    </Create>
);

export default NodeCreate;
