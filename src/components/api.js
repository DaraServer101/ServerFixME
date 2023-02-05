import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export const getLocations = () => {
    return axios.get(`${baseURL}/locations`);
}

export const getLocation = id => {
    return axios.get(`${baseURL}/locations/${id}`);
}

export const createLocation = location => {
    return axios.post(`${baseURL}/locations`, location);
}

export const updateLocation = (id, location) => {
    return axios.put(`${baseURL}/locations/${id}`, location);
}

export const deleteLocation = id => {
    return axios.delete(`${baseURL}/locations/${id}`);
}
export default class api {
}