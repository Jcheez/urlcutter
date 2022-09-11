import axios from 'axios'

const BASE = process.env.REACT_APP_BACKEND
console.log(BASE)
export const postURLshortcut = async (urlData) => {
    const promise = axios.post(BASE + "/generate", urlData)
    .then(res => {return res.data})
    .catch(error => {
        return error.response.data
    })
    return promise
}

export const getOriginalURL = async (shortcut) => {
    const promise = axios.get(BASE + "/" + shortcut)
    .then(res => {return res.data})
    .catch(error => {return error.response.data})
    return promise
}