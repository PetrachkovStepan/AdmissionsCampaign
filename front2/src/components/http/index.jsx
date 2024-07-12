import axios from "axios";


const $host = axios.create({
    baseURL: 'http://localhost:8080/'
})
const $host1 = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/'
})
const $authHost = axios.create({
    baseURL: 'http://localhost:8080/'
})


export {
    $host,
    $host1,
    $authHost
}