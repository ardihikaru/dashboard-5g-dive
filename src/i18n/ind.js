// Source: https://github.com/ronadi/ra-language-indonesian
import indonesianMessages from "ra-language-indonesian"

export default {
    simple: {
        action: {
            close: 'Tutup',
            resetViews: 'Réinitialiser des vues',
        },
        'switch-language-str': 'Indonesia to English',
        'logout-button': 'Keluar',
    },
    ...indonesianMessages,
    resources: {
        users: {
            name: 'Data Pengguna |||| Data Pengguna',
            fields: {
                name: 'Nama Lengkap',
                username: 'Nama Pengguna',
                email: 'Email',
            },
        },
        drones: {
            name: 'Data Drone |||| Data Drone',
            fields: {
                drone_id: 'Nomor Drone',
                drone_name: 'Nama Drone',
            },
        },
        nodes: {
            name: 'Data Node |||| Data Node',
            fields: {
                node_id: 'Nomor Node',
                node_name: 'Nama Node',
            },
        },
    },
    user: {
        list: {
            search: 'Cari',
        },
        edit: {
            title: 'Nama Pengguna "%{title}"',
        },
    },
    drone: {
        list: {
            search: 'Cari',
        },
        edit: {
            title: 'Nama Drone "%{title}"',
        },
    },
    node: {
        list: {
            search: 'Cari',
        },
        edit: {
            title: 'Nama Node "%{title}"',
        },
    },
};
