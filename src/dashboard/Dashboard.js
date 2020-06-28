import * as React from "react";
// import React, {
//     useState,
//     useEffect,
//     useCallback,
//     FC,
//     CSSProperties,
// } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
// import { useMediaQuery, Theme } from '@material-ui/core';

// const Dashboard: FC = () => {
const Dashboard = () => {
// export default () => (
//     <Card>
//         <CardHeader title="Welcome to the administration" />
//         <CardContent>Lorem ipsum sic dolor amet...</CardContent>
//     </Card>
// );

    // const [state, setState] = useState<State>({});
    // const version = useVersion();
    // const dataProvider = useDataProvider();
    // const isXSmall = useMediaQuery((theme: Theme) =>
    //     theme.breakpoints.down('xs')
    // );
    // const isSmall = useMediaQuery((theme: Theme) =>
    //     theme.breakpoints.down('sm')
    // );

    return (
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
    );

};

export default Dashboard;
