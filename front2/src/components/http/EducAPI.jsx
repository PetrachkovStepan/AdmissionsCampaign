import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const createEduc = async (enrollee_id) => {
    const data = {
        "score": 0,
        "enrollee_id": enrollee_id,
        "level": "",
        "school_type": "",
        "school_name": "",
        "educ_date": "",
        "doc_num": "",
        "foreign_language": "",
        "doc": ""
    };
    const response = await pb.collection('educ_certificate').create(data);
    console.log(response)
    return response
}
export const updateEduc = async (data, id) => {
    
    const response = await pb.collection('educ_certificate').update(id, data);
    console.log(response)
    return response
}
export const getEduc = async (enrollee_id) => {
    pb.autoCancellation(false)
    const a = await pb.send("/applicant-api/educ/getone/" + enrollee_id, { 

    });
    return a
}