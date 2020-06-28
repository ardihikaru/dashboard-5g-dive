import {Edit, SimpleForm, TextInput, useTranslate} from "react-admin";
import * as React from "react";

const NodeTitle = ({ record }) => {
    const translate = useTranslate();
    return <span>
        {record ? translate('node.edit.title', { title: record.node_name }) : ''
    }</span>;
};

const NodeEdit = props => (
    <Edit title={<NodeTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="node_id" />
            <TextInput source="node_name" />
        </SimpleForm>
    </Edit>
);

export default NodeEdit;
