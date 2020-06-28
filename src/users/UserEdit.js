import {Edit, SimpleForm, TextInput, useTranslate} from "react-admin";
import * as React from "react";
// import UserCreate from "./UserCreate";

const UserTitle = ({ record }) => {
    const translate = useTranslate();
    return <span>
        {record ? translate('user.edit.title', { title: record.name }) : ''
    }</span>;
};

// export const UserEdit = props => (
const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/*<ReferenceInput source="userId" reference="users">*/}
            {/*    <SelectInput optionText="name" />*/}
            {/*</ReferenceInput>*/}
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            {/*<TextInput multiline source="body" />*/}
        </SimpleForm>
    </Edit>
);

export default UserEdit;
