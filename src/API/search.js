import * as request from '~/utils/request';

const fetchAPI = async (q, type) => {
    const options = {
        params: {
            q,
            type,
        },
    };
    try {
        const res = request.get('users/search', options);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default fetchAPI;
