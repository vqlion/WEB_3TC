import React from 'react'
import '../index.css'
import axios from 'axios';
import { useEffect } from 'react';
//mport Card from './Card'
import { useState, useRef } from "react"
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

    // const getUserInfo = () => {
    //     axios
    //         .get('http://localhost:8082/api/getusers')
    //         .then((res) => console.log(res))
    // }
    // getUserInfo();

    var userId = "6489fcfb22ecc34e945ab951"
    const [users, updateusers] = useState([]);
    const reqDone = useRef(false);
    function getUserInfo2()
    {   
        
        reqDone.current=true;
        axios
            .post("http://localhost:8082/api/getusers", {"google_id": userId})
            .then(res=>
                    {
                        console.log(res.data)
                        let userslist = res.data;
                        let user = userslist.map(us => <div><b style={{fontSize:20 + 'px'}}>{us["username"]}</b></div>)
                        updateusers(user);
                    })
            .catch(err => console.log(err))
    }
    if (reqDone.current==false) getUserInfo2()
    return ( 
        <div className='wrapper'>
            <header className='header'> <h2>Profil</h2> </header>
            <div className='affichage'> 
                <div >
                    <h3>Nom d'utilisateur</h3>
                    <p>{users}</p>
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