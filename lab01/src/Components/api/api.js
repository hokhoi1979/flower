import axios from "axios";

const baseURL = "https://66d8593537b1cadd80545af5.mockapi.io/Flower";

export const getAllFlower = async () =>{
    try{
        const response = await axios.get(baseURL);
        return response.data;
    }catch(e){
        console.log(e.toString());
    }
}

export const getFlowerById = async (id) =>{
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        return response.data;
    } catch (e) {
        console.log(e.toString());
    }
}
