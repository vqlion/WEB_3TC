import React from 'react'
import '../index.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card'
function Userdata() {
    // const [dataUser,setData] = useState([]);
    // useEffect(() => {
    //     const fetchUserData = async () =>{
    //         const {dataUser} = await axios.get("http://localhost:8082/api/getusers");
    //         setData(dataUser);
    //         return dataUser;
    //     };
        
    //    fetchUserData();
    // });
    const getUserInfo = () => {
        axios
            .get('http://localhost:8082/api/getusers')
            .then((res) => console.log(res))
    }
    getUserInfo();
    return ( 
        <div className='wrapper'>
            <header className='header'> <h2>Profil</h2> </header>
            <div className='affichage'> 
                <div >
                    <h3>Nom d'utilisateur</h3>
                    <p>username_Base</p>
                </div>
            </div> 
        </div>

     );
}

export default Userdata;


// {dataUser.map((user) => (
//     <Card
//     name={user.username}
//     asso={user.assoList[0]}
//     />
// ))}