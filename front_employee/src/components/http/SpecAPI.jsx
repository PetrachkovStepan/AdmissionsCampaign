import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const createSpec = async (data) => {
    const response = await pb.collection('speciality').create(data);
    //console.log(response)
    return response
}

export const updateSpec = async () => {
    
}

export const deleteSpec = async (code) => {
    const response = pb.send("/applicant-api/speciality/delete/" + code, { 
            method: "DELETE"
        });

    console.log(response)
    return response
}

export const getAllSpec = async () => {
    let responce = (await axios.get("http://127.0.0.1:8090/api/collections/speciality/records")).data.items
    console.log(responce);
    return responce
}