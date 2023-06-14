export default function getUserData (){
    return JSON.parse(sessionStorage.getItem('userData'))
}

//this lacks a promise to work properly. 
//fix: wrap it inside a promise and wait for it to resolve in the page
//this might or might not work