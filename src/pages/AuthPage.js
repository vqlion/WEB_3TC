import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import getUserData from '../lib/AuthHelper';
import styles from './AuthPage.module.css'
import { Link } from 'react-router-dom';
import { FaRegUserCircle, FaHome } from "react-icons/fa";

function AuthPage() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        sessionStorage.setItem('userData', JSON.stringify(res.data))
                        let userInfo =
                        {
                            username: res.data.name,
                            assoList: [],
                            google_id: res.data.id,
                        }
                        axios
                            .post("http://localhost:8082/api/adduser", userInfo)
                            .then(res => console.log(res))
                            .catch(err => { })

                    })
                    .catch((err) => console.log(''));
            }
        },
        [user]
    );

    const getProfileInfo = () => {
        getUserData().then(res => setProfile(res)).catch(setProfile(null))
    }

    useEffect(
        () => {
            let ignore = false;
            if (!ignore) getProfileInfo()
            return () => { ignore = true; }
        }, []
    )

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        sessionStorage.clear();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.authBox}>

                <h2>Connexion au compte</h2>
                <div className={styles.authUserBox}>
                    {profile ? (<>
                        <h2>Bonjour, {profile.name}</h2>
                        <p>Vous êtes connecté.</p>
                        <button className={styles.authButton} onClick={logOut}>Se deconnecter</button>
                        <div className={styles.buttonContainer}>
                            <Link className='link-box' to="/"><FaHome className='icon' /></Link>
                            <Link className='link-box' to="/profile/info"><FaRegUserCircle className='icon' /></Link>
                        </div>
                    </>
                    ) : (<>

                        <button className={styles.authButton} onClick={() => login()}>Se connecter avec Google</button>
                        <div className={styles.buttonContainer}>
                            <Link className='link-box' to="/"><FaHome className='icon' /></Link>
                        </div>

                    </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthPage;