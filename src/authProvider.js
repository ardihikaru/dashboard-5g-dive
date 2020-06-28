import {fetchUtils} from "react-admin";
// import { fetchUtils } from 'react-admin';
// import { stringify } from 'query-string';

const apiUrl = 'http://localhost:5000/api';
const httpClient = fetchUtils.fetchJson;

export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        const url = `${apiUrl}/auth/login`;
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
        }).then(({ json }) => {
            if (json.response){
                localStorage.setItem('token', json.results.access_token);
            }
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
