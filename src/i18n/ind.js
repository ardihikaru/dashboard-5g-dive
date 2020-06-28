// Source: https://github.com/ronadi/ra-language-indonesian
import indonesianMessages from "ra-language-indonesian"

export default {
    simple: {
        action: {
            close: 'Tutup',
            resetViews: 'Réinitialiser des vues',
        },
        'switch-language-str': 'Ganti bahasa: English',
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
    },
    user: {
        list: {
            search: 'Cari',
        },
        form: {
            summary: 'Ringkasan',
            security: 'Sekuritas',
        },
        edit: {
            title: 'Nama Pengguna "%{title}"',
        },
    },
};
