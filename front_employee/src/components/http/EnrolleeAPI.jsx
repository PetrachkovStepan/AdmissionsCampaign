import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const getEnrolleProf = async (id) => {
    pb.autoCancellation(false)

    let responce = (await axios.get("http://127.0.0.1:8090/api/collections/enrollee/records/"+ id))
    console.log("ENROLLEE "+ responce.data)
    return responce.data
}
export const getPassport = async (id) => {
    pb.autoCancellation(false)

    const record = await pb.collection('passport').getFirstListItem('enrollee_id="'+ id +'"', {
        
    });
    console.log(record)
    return record
}
export const getEduc = async (id) => {
    pb.autoCancellation(false)

    const record = await pb.collection('educ_certificate').getFirstListItem('enrollee_id="'+ id +'"', {
        
    });
    console.log("EDUC SERTIFICATE "+ record)
    return record
}

export const updateEnrollee = async (id, data) => {
    pb.autoCancellation(false)

    const record = await pb.collection('enrollee').update(id, data);
    return record
}

export const createCt = async (data) => {
    
    const response = await pb.collection('ct').create(data);

    console.log(response)
    return response
}

export const deleteCt = async (code) => {
    const response = await pb.collection('ct').delete(code);

    console.log(response)
    return response
}

export const getAllCt = async (id) => {
    // GET BY ENROLLEE 
    const responce = await pb.send("/applicant-api/ct/getallbyenrollee/" + id, { 

    });
    // console.log(responce.records);
    return responce.records
}

export const getAllEnrollee = async () => {
    pb.autoCancellation(false) 
    let responce = (await axios.get("http://127.0.0.1:8090/api/collections/enrollee/records"))

    console.log(responce.data.items);
    return responce.data.items
}

export const getAllEnrolleeFiltered = async () => {
    pb.autoCancellation(false) 
    const response = await pb.send("/applicant-api/enrollee/getallfiltered", { 

    });
    console.log(response.records);
    return response.records
}
export const getAllBenefits = async (enrollee_id) => {
    pb.autoCancellation(false)
    const response = await pb.send("/applicant-api/benefit/getallbyenrollee/" + enrollee_id, { 

    });
    console.log("BEN" + enrollee_id)
    console.log(response)
    return response
}

export const updateBenefit = async (id, data) => {
    pb.autoCancellation(false)

    const record = await pb.collection('benefit').update(id, data);
    return record
}
