import React from 'react'
import '../index.css'
import { useState, useRef } from "react"
import getUserData from '../lib/AuthHelper';
import styles from './UserData.module.css'
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Userdata() {

    const [profile, setProfile] = useState()

    const reqDone = useRef(false);

    if (!reqDone.current) {
        reqDone.current = true;
        getUserData().then((res) => {
            setProfile(res)
        })
            .catch(setProfile(null))
    }

    const navigate = useNavigate()

    const logOut = () => {
        googleLogout();
        setProfile(null);
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <div className='wrapper'>
            <h2>Profil</h2>
            <div>
                {profile && (
                    <div className={styles.profile}>
                        <img src={profile.picture} alt="user image" />
                        <h3>{profile.name}</h3>
                        <p>Adresse mail: {profile.email}</p>
                        <button className={styles.userButton} onClick={logOut}>Se déconnecter</button>
                    </div>)}
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