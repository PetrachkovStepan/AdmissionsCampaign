import axios from "axios";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const registration = async (email,password) => {
    const response = await pb.send("/applicant-api/enrollee/register/" + email 
    + "/" + password, {
            method: "POST"
        });
        console.log()
    return response.user
}

export const updateUser = async (id, data) => {
    pb.autoCancellation(false)


    const record = await pb.collection('enrollee').update(id, data);
    console.log(record);
    return record
}

export const logIn = async (login, password) => {
    const response = await pb.send("/applicant-api/enrollee/login/" + login + "/" + password, {
    });

    console.log(response.user)
    return response.user
}

export const getAll = async () => {
    pb.autoCancellation(false)
    return (await axios.get("http://127.0.0.1:8090/api/collections/enrollee/records")).data
}



export const createPassport = async (enrollee_id) => {
    const data = {
        "fio_k": "",
        "fio_l": "",
        "birth_date": "",
        "given_date": "",
        "given_by_whom": "",
        "birth_place": "",
        "series": "",
        "sex": "m",
        "id_num": "",
        "num": "",
        "enrollee_id": enrollee_id,
        "family": ""
    };
    
    const response = await pb.collection('passport').create(data);
    //console.log(response)
    return response
}
export const getPassport = async (enrollee_id) => {
    pb.autoCancellation(false)
    const a = await pb.send("/applicant-api/passport/getone/" + enrollee_id, { 

    });
    console.log(a)
    return a
}

export const updatePassport = async (id, data) => {
    pb.autoCancellation(false)
    
    const response = await pb.collection('passport').update(id, data);
    console.log(response);
    return response
}

export const getOneP = async (email) => {
    console.log(email)
    // const records = await pb.collection('enrollee').getFullList({
    //     filter: 'email = "' + email +'"',
    // });
    const records = await axios.get(`http://127.0.0.1:8090/api/collections/enrollee/records?filter=(email='${email}')`)
    return records.data.items
}