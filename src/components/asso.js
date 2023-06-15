import React from 'react'
import '../index.css'
import axios from 'axios';
import { useState, useRef } from "react"
function AssoUser() {
    var userId = "6489fcfb22ecc34e945ab951"
    const [listasso, updatelistasso] = useState([]);
    const reqDone = useRef(false);
    function getUserInfo()
    {
        reqDone.current=true;
        axios
            .post("http://localhost:8082/api/getusers", {"google_id": userId})
            .then(res=>
                    {
                        console.log(res.data)
                        let userslist = res.data;
                        let asso= userslist.map(us => <div><b style={{fontSize:20 + 'px'}}>{us["assoList"]}</b> <br></br> </div>)
                        updatelistasso(asso);
                    })
            .catch(err => console.log(err))
    }
    if (reqDone.current==false) getUserInfo()
    return ( 
        <div className='wrapper'>
            <header className='header'><h2>Listes des associations</h2></header>
            <div className='affichage'> 
                <div >
                    <h3></h3>
                    <p>{listasso}</p>
                </div>
            </div> 
        </div>

     );
}

export default AssoUser;