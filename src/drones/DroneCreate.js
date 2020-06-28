import {Create, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

const DroneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput keyboardType='numeric' disabled source="id" />
            <TextInput source="drone_id" />
            <TextInput source="drone_name" />
        </SimpleForm>
    </Create>
);

export default DroneCreate;
