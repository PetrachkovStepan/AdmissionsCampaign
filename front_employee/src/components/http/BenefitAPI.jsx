import axios from "axios";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export const updateBenefit = async () => {
    
}
export const getOneBenefit = async () => {
    
}


export const getAllBenefit = async () => {
    let responce = (await axios.get("http://127.0.0.1:8090/api/collections/speciality/records")).data.items
    console.log(responce);
    return responce
}