export default {
    phone: (value) => {
        return value
            .replace(/\D/, '')
            .replace(/(\d{2})(\d)/, '($1) $2 ')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{4})(\d)/, '$1');
    },
};
