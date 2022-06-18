import axios from 'axios'; 

export const descriptionService = {
    addDescription,
    getLevel
};

function addDescription() {

    return axios.post("/addData").then(response => {
        return response.data;
    }).catch((err) => {
        return { message: err.message};
    })
}

function getLevel() {

    return axios.get("/getLevel").then(response => {
         return response.data;
    }).catch((err) => {
        return Promise.reject({ message: err.message});
    })
}