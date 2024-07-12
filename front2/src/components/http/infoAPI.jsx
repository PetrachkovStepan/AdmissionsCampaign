import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const createBenefit = async (name, enrollee_id) => {
    const data = {
        "name": name,
        "type": "blank",
        "enrollee_id": enrollee_id
    };
    const response = await pb.collection('benefit').create(data);
    console.log(response)
    return response
}
export const getAllBenefits = async (enrollee_id) => {
    pb.autoCancellation(false)
    const response = await pb.send("/applicant-api/benefit/getallbyenrollee/" + enrollee_id, { 

    });
    console.log(response)
    return response
    //return (await axios.get("http://127.0.0.1:8090/api/collections/benefit/records")).data
}
export const deleteAllBenefits = async (benId) => {
   // pb.autoCancellation(false)
    const response = await pb.send("/applicant-api/benefit/delete/" + benId, { 
        method: "DELETE"
    });
    console.log(response)
    return response
    //return (await axios.get("http://127.0.0.1:8090/api/collections/benefit/records")).data
}