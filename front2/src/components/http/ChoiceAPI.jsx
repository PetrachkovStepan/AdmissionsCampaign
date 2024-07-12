import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const createChoice = async (data) => {
    
    const response = await pb.collection('choice').create(data);
    //console.log(response)
    return response
}
export const updateChoice = async (data, id) => {
    
    const response = await pb.collection('choice').update(id, data);
    return response
}
export const getAllChoice = async (enrollee_id) => {
    pb.autoCancellation(false)
    const response = await pb.send("/applicant-api/choice/getallbyenrollee/" + enrollee_id, { 

    });
    return response.records
}
export const deleteAllChoice = async (delId) => {
    pb.autoCancellation(false)
     const response = await pb.send("/applicant-api/choice/delete/" + delId, { 
         method: "DELETE"
     });
     return response
 }