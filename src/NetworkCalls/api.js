import axios from "axios";

// const BASE_URL_LOCAL = 'http://localhost:5000/'s
export const BASE_URL_DEPLOYED = 'http://3.93.165.26:5000/'

export const makeRequest = async (method, uri, params = {}) => {
    return await (await axios.get(BASE_URL_DEPLOYED + uri)).data
}

export const searchRequest = async (method, uri, params = {}) => {
    return (await axios.get(BASE_URL_DEPLOYED + uri)).data
}
