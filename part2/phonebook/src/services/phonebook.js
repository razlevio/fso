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
    let req = axios.put(`${baseURL}/${id}`, newObj);
    return req.then(res => res.data);
};
 
function del(id) {
    const conf = window.confirm("Are you sure you want to delete this person?");
    if(conf) {
        let req = axios.delete(`${baseURL}/${id}`);
        return req.then(res => {
            if(res.data) return res.data;
            else return null
        });
    }
    else return null;
};

export {getAll, create, update, del};