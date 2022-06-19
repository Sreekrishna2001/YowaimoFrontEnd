import axios from "axios";

const BASE_URL = 'http://localhost:5000/'

export const makeRequest = async(method,uri,params = {})=>{
    return JSON.parse(await (await axios.get(BASE_URL+uri)).data)
}
