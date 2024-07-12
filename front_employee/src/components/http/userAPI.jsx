import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const registration = async (name, email,password, role, phoneNum, department, info) => {
    const response = await pb.send("/applicant-api/university_employee/register/" + name +"/"+ email 
    + "/" + password + "/" + role + "/" + phoneNum + "/"+ department +"/" + info, {
            method: "POST"
        });
    console.log(response)
    return response
}

export const update = async (name, email,password, role, phoneNum, department, info) => {
    const response = pb.send("/applicant-api/university_employee/updateuser/" + name +"/"+ email 
    + "/" + password + "/" + role + "/" + phoneNum + "/"+ department +"/" + info, {
            method: "PATCH"
        });
    return response
}

export const logIn = async (login, password) => {
    const response = pb.send("/applicant-api/university_employee/login/" + login + "/" + password, {
    });

    console.log(response)
    return response
}
export const deleteProfile = async (email) => {
    const response = pb.send("/applicant-api/university_employee/delete/" + email, { 
            method: "DELETE"
        });

    console.log(response)
    return response
}

// export const getAll = async () => {
//     try{
//     const response = await pb.send("/api/collections/university_employee/records", { 
           
//     });
//     console.log(response.items);
//     return response.items
//     } catch(e) {
//         console.log("Похуй");
//     }

// }

export const getAll = async () => {
    return (await axios.get("http://127.0.0.1:8090/api/collections/university_employee/records")).data
}

export const getOneP = async (email) => {
    const records = await pb.collection('university_employee').getFullList({
        filter: 'email = "' +email +'"',
    });
    return records
}

export const getProfile = async (id) => {
    pb.autoCancellation(false)
    const record = await pb.collection('university_employee').getOne(id, {});
    return record
}