import axios from 'axios';

export function getAll(resource){
    return axios.get('http://localhost:3001/${resource}')
}

export function getById(resource){
    return axios.get('http://localhost:3001/${resource}/${id}')
}

export function getByPrice(resource){
    return axios.get('http://localhost:3001/${resource}/${price}')
}

export function getByCategory(resource){
    return axios.get('http://localhost:3001/${resource}/${category}')
}

export function getByCategoryB(resource){
    return axios.get('http://localhost:3001/${resource}/${categoryB}')
}