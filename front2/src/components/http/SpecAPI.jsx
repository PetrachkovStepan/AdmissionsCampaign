import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const getAllSpec = async () => {
    pb.autoCancellation(false)
    let resp = await axios.get("http://127.0.0.1:8090/api/collections/speciality/records")
    //console.log(resp.data.items);
    return resp.data.items
}
export const getOneSpec = async (id) => {
    pb.autoCancellation(false)

        const response = await pb.send("/applicant-api/speciality/getoneby/id/" + id, { 

        });
        return response
 }