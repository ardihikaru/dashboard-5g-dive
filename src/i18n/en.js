import englishMessages from 'ra-language-english';

export const messages = {
    simple: {
        action: {
            close: 'Close',
            resetViews: 'Reset views',
        },
        'switch-language-str': 'Switch Language: Indonesia',
    },
    ...englishMessages,
    resources: {
        users: {
            name: 'User |||| Users',
            fields: {
                name: 'Nama Lengkap',
                username: 'Nama Pengguna',
                email: 'Email',
            },
        },
        drones: {
            name: 'Drone |||| Drones',
            fields: {
                drone_id: 'Drone ID',
                drone_name: 'Drone Name',
            },
        },
        nodes: {
            name: 'Node |||| Nodes',
            fields: {
                node_id: 'Node ID',
                node_name: 'Node Name',
            },
        },
    },
    user: {
        list: {
            search: 'Search',
        },
        edit: {
            title: 'User "%{title}"',
        },
    },
    drone: {
        list: {
            search: 'Search',
        },
        edit: {
            title: 'Drone "%{title}"',
        },
    },
    node: {
        list: {
            search: 'Search',
        },
        edit: {
            title: 'Node "%{title}"',
        },
    },
};

export default messages;
