import * as types from "./action-types"

export const  loadProfiles = (profiles)=>{
    return{
        type: types.GET_PROFILES,
        profiles
    }
}

export const addProfile = (profile)=>{
    return {
        type:types.ADD_PROFILE,
        profile
    }
}

export const deleteProfile = (id)=>{
    return{
        type:types.DELETE_PROFILE,
        id
    }
}

export const searchProfiles = (text)=>{
    return{
        type:types.SEARCH_PROFILE,
        text
    }
}

export const getProfile = (id)=>{
    return{
        type:types.GET_PROFILE,
        id
    }
}

export const updateProfile = (profile)=>{
    return{
        type:types.UPDATE_PROFILE,
        profile
    }
}

//ASYNC ACTIONS
export function fetchProfiles() {
    return dispatch => {
        fetch("http://localhost:3000/profiles")
            .then(resp => resp.json())
            .then(data => {
                dispatch(loadProfiles(data))
            });
    };
}

export function saveProfile(profile) {
    return dispatch => {
        return fetch('http://localhost:3000/profiles', {
            method: 'post',
            body: JSON.stringify(profile),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data=>dispatch(addProfile(data)));
    }
}

// handling response
function  handleResponse(response){
    if(response.ok){
        return response.json();
    }else{
        let error=new Error(response.statusText);
        error.response=response;
        throw error;
    }
}