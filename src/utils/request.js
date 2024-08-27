import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,

});

export const get = async(path, option = {}) => {
    const response = await request.get(path, option);
    response.data = response.data.data;
    return response;
}

export default request;