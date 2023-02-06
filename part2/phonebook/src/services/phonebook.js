import axios from "axios";

const baseURL = "http://localhost:3001/persons"

function getAll() {
    let req = axios.get(baseURL)
    return req.then(res => res.data);
}

function create(newObj) {
    let req = axios.post(baseURL, newObj);
    return req.then(res => res.data);
};

function update(id, newObj) {
    let req = axios.put(`${baseURL}/{id}`, newObj);
    return req.then(res => res.data);
}

export {getAll, create, update};