import {Edit, SimpleForm, TextInput, useTranslate} from "react-admin";
import * as React from "react";

const DroneTitle = ({ record }) => {
    const translate = useTranslate();
    return <span>
        {record ? translate('drone.edit.title', { title: record.drone_name }) : ''
    }</span>;
};

const DroneEdit = props => (
    <Edit title={<DroneTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="drone_id" />
            <TextInput source="drone_name" />
        </SimpleForm>
    </Edit>
);

export default DroneEdit;
