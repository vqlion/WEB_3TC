import React from 'react'
import '../index.css'
import axios from 'axios';
import { useState, useRef } from "react"
import { Button } from "react-native";
function AssoUser() {
    const userId = JSON.parse(sessionStorage.getItem("userData")).id;
    const [listasso, updatelistasso] = useState([]);
    const reqDone = useRef(false);
    const sendSub = () =>
    {
        console.log("pressed")
        let nameAsso = document.getElementById("inscription").value
        if(nameAsso!="Exit" && nameAsso!="KLS" && nameAsso!="24" && nameAsso!="Karna")
            {
                alert("Cette association n'existe pas !");
            }
        else
            {
                let temp = 
                {
                    username: JSON.parse(sessionStorage.getItem("userData")).name,
                    assoName: document.getElementById("inscription").value,
                }
            console.log(temp)
            axios
                .post("http://localhost:8082/api/subscribe", temp)
                .then(res => alert(res.data))
            }
        
    }
    function getUserInfo()
    {
        reqDone.current=true;
        axios
            .post("http://localhost:8082/api/getusers", {"google_id": userId})
            .then(res=>
                    {
                        let assoList = res.data[0]["assoList"];
                        let asso= assoList.map(us => <div style={{fontSize:20 + 'px'}}>{us} <br></br> </div>)
                        updatelistasso(asso);
                    })
            .catch(err => console.log(err))
    }
    if (reqDone.current==false) getUserInfo()
    console.log(listasso)
    return ( 
        <div className='wrapper'>

            <header className='header'><h2>Listes des associations</h2></header>
            <div className='affichage'> 
                <div >
                    <h3></h3>
                    <p>{listasso}</p>
                </div>
                <b style={{fontSize: 20+ "px"}}>S'inscrire à une association</b>
                <input id="inscription" type="text" placeholder="Nom de l'association"></input>
               <div>
                <button onClick={sendSub}>S'inscrire</button>
               </div>

            </div> 
        </div>

     );
}

export default AssoUser;