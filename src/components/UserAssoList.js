import React from 'react'
import '../index.css'
import axios from 'axios';
import { useState, useRef } from "react"
import styles from './UserAssoList.module.css'
import userStyles from './UserData.module.css'

function UserAssoList() {
    const userId = JSON.parse(sessionStorage.getItem("userData")).id;
    const [listasso, updatelistasso] = useState([]);
    const reqDone = useRef(false);
    const sendSub = () => {
        console.log("pressed")
        let nameAsso = document.getElementById("inscription").value
        if (nameAsso != "Exit" && nameAsso != "KLS" && nameAsso != "24" && nameAsso != "Karna") {
            alert("Cette association n'existe pas !");
        }
        else {
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
    function getUserInfo() {
        reqDone.current = true;
        axios
            .post("http://localhost:8082/api/getusers", { "google_id": userId })
            .then(res => {
                let assoList = res.data[0]["assoList"];
                updatelistasso(assoList);
            })
            .catch(err => console.log(err))
    }
    if (reqDone.current == false) getUserInfo()
    console.log("listeasso", listasso)
    return (
        <div className='wrapper'>

            <h2>Listes des associations</h2>
            <div className={userStyles.profile}>
                <div className={styles.assoList}>
                    {listasso.map(entry => <p>{entry}</p>)}
                </div>
                <div className={styles.box}>
                    <h3>S'inscrire à une association</h3>
                    <input id="inscription" type="text" placeholder="Nom de l'association"></input>
                    <div>
                        <button onClick={sendSub}>S'inscrire</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default UserAssoList;