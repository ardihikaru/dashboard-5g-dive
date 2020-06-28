import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});

// const MyUrlField = ({ record = {}, source }) =>
//     // <a href={record[source]}>
//     // <a href={record[source]} target="_blank" rel="opener">
//     //     {record[source]}
//     // </a>;
//     // <a rel="noopener noreferrer" href={record[source]} target="_blank">
//     <a rel="noopener noreferrer" href={"http://" + record[source]} target="_blank">
//         {record[source]}
//     </a>;

const MyUrlField = ({ record = {}, source }) => {
    const classes = useStyles();
    return (
        // <a href={record[source]} className={classes.link} rel="noopener noreferrer" target="_blank">
        <a href={"http://" + record[source]} className={classes.link} rel="noopener noreferrer" target="_blank">
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    );
};

export default MyUrlField;