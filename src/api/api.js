import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com/",

});

export const userAPI = {

    getUserInfo(username){
        return instance.get(`users/${username}`)
            .then(response => response.data)
    }

}

export const reposAPI = {

    getRepos(username){
        return instance.get(`users/${username}/repos`)
            .then(response => response.data)
    }

}
